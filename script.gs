function doPost(e) {
    var lock = LockService.getScriptLock();
    try {
        lock.waitLock(30000); // Tunggu hingga 30 detik untuk mendapatkan lock.
        var sheet = SpreadsheetApp.openById('1hzmHVeYsgmbRvHvGLdjSXd_4lW_N4gNp-pFXSN1ACzA').getSheetByName('Sheet1');
        var data = [e.parameter.fullname, e.parameter.email, e.parameter.phone, e.parameter.class, e.parameter.password];
        sheet.appendRow(data);
        return ContentService.createTextOutput("Data telah disimpan ke spreadsheet");
    } catch (e) {
        return ContentService.createTextOutput("Gagal menyimpan data");
    } finally {
        lock.releaseLock();
    }
}
