import {object01 } from '../helper/helper.js';
import Exceljs from 'exceljs';


export async function ExcelWrite(searchtext,excelfilepath,replacevalue,change) {
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(excelfilepath);
    const worksheet = workbook.getWorksheet('Sheet1');
    ExcelRead(worksheet,searchtext);

    //const cellvalue = worksheet.getCell(object01.row, object01.column); // Read location of the cell to be updated
    const cellvalue = worksheet.getCell(object01.row,object01.column+change.columnChange);
    cellvalue.value = replacevalue;
    await workbook.xlsx.writeFile(excelfilepath);//save file after writing
}

export async function ExcelRead(worksheet, searchtext) {
    worksheet.eachRow((row, rowNumber) => {//iterate through each row in the sheet
        row.eachCell((cell, colNumber) => {//iterate through each cell in the row
            //console.log(cell.value);//print the value of the cell

            if (cell.value === searchtext) {//if the cell value is 'Banana'
                console.log(`Found '${searchtext}' at row ${rowNumber}, column ${colNumber}`);//print the location of the cell
                object01.row = rowNumber;//store the row number in a variable
                object01.column = colNumber;//store the column number in a variable

            }
        });
    });
}

//ExcelWrite("Mango",excelfilepath,350,{rowChange:0, columnChange:2});//column change is 2 is move 2 columns to the right 

