function doGet(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Request");
    var targetRow = sheet.getLastRow() + 1;
    // --
    var idx = targetRow - 1;
    var stateList = ["Open", "Close"];
    var kindList = ["not_set", "bonwae", "cut", "click", "pitch", "tool", "general"];
    var name = e.parameter.name;
    // --
    sheet.getRange(targetRow, 1).setValue(idx);
    setRule(sheet.getRange(targetRow, 2), stateList);
    setRule(sheet.getRange(targetRow, 3), kindList);
    sheet.getRange(targetRow, 4).setValue(name);
}

function setRule(range, ruleList) {
    var rule = SpreadsheetApp.newDataValidation().requireValueInList(ruleList).build();
    range.setDataValidation(rule);
    range.setValue(ruleList[0]);
}