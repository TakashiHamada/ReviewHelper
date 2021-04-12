function myFunction() {
  
}

function doGet(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Request");
    var targetRow = sheet.getLastRow() + 1;
    // --
    var name = e.parameter.name;

    sheet.getRange(targetRow, 1).setValue(name);
    
    
    
}