import { url01 } from "../helper/helper";

export class DownloadPage {

    constructor(page) {
        this.page = page;
        this.downloadbtn = page.getByRole('button', { name: 'Download' });
        this.filepath = page.locator('#fileinput')

    }

    async goto(Durl) {
        await this.page.goto(Durl, { timeout: 100000 });
    }
    async clickDownload() {
        await this.downloadbtn.click();
    }

    async uploadFile(downloadfilepath) {
        await this.filepath.setInputFiles(downloadfilepath);
    }
    
}
