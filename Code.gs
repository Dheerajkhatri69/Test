function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('upload');
  return html;
}

function uploadFiles(data){
  var file = data.myfile;
  var folder = DriveApp.getFolderById('1wmrVdwY_nZGBOuha-apu-tvKFWpiGIDH');
  var creatFile = folder.createFile(file);
  return creatFile.getUrl();
}
