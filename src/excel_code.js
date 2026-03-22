const Exceljs = require('exceljs');
const excelfilepath = '../data/download.xlsx';


async function ExcelRead() {//await comews with the async function 
const workbook = new Exceljs.Workbook();//create new workbook
//read the file from the path and wait async for the file to be read before proceeding
await workbook.xlsx.readFile(excelfilepath);

    const worksheet = workbook.getWorksheet('Sheet1');//get the sheet from the workbook
    worksheet.eachRow((row, rowNumber) => {//iterate through each row in the sheet
        row.eachCell((cell, colNumber) => {//iterate through each cell in the row
            //console.log(cell.value);//print the value of the cell

            if(cell.value === 'Apple') {//if the cell value is 'Apple'
                console.log(`Found 'Apple' at row ${rowNumber}, column ${colNumber}`);//print the location of the cell
            }
        });
    });

}
ExcelRead();