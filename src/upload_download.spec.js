import { test,expect } from '@playwright/test';
import { downloadfilepath, url01 } from '../helper/helper.js';
import { ExcelWrite } from './excel_code.js';
import { textSearch,updatedvalue } from '../data/testdata.js';

test('download excel file write Mango price to 350', async ({ page }) => {
    await page.goto(url01, { timeout: 100000 });
    const downpromise = page.waitForEvent('download');//wait for the download event to complete
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downpromise;//wait for the download event to complete
    await download.saveAs(downloadfilepath);//save the downloaded file and get the actual file path
    console.log(downloadfilepath);
    await ExcelWrite(textSearch, downloadfilepath, updatedvalue, { rowChange: 0, columnChange: 2 });
});

test('upload modified excel file and validate the change', async ({ page }) => {
    await page.goto(url01);
    //handle outside file upload dialog
    await page.locator('#fileinput').setInputFiles(downloadfilepath);//gives the path of the local system.
    //assertion to validate the change in the excel file

    const toast = page.locator(".Toastify__toast-body");
    await expect(toast).toContainText("Updated Excel Data Successfully");
    const results = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
    await expect(results.locator('#cell-4-undefined')).toContainText(`${updatedvalue}`);//assert the updated value in the table

});