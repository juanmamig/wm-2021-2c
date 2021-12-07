const usuarios = require('./usuarios');
const xl = require('excel4node');
var wb = new xl.Workbook();
// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');
var style = wb.createStyle({
    font: {
      color: '#FF0800',
      size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
  });
//   ws.cell(1, 2)
//   .number(200)
//   .style(style);
 // wb.write('ExcelFile.xlsx');
  usuarios.forEach((usuario, index)=>{
    let index2 =1;
    for(let propiedad in usuario){
        ws.cell(index+1, index2)
        .string(String(usuario[propiedad]))
        .style(style);    
        index2++;
    }
  });
  wb.write('ExcelFile.xlsx');