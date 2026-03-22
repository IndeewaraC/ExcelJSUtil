const Exceljs = require('exceljs');
const path = '../data/download.xlsx';


async function ExcelRead() {//await comews with the async function 
const workbook = new Exceljs.Workbook();//create new workbook
//read the file from the path and wait async for the file to be read before proceeding
await workbook.xlsx.readFile(path);

    const worksheet = workbook.getWorksheet('Sheet1');//get the sheet from the workbook
    worksheet.eachRow((row, rowNumber) => {//iterate through each row in the sheet
        row.eachCell((cell, colNumber) => {//iterate through each cell in the row
            console.log(cell.value);//print the value of the cell
        });
    });

}
ExcelRead();