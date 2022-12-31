const { app, BrowserWindow } = require('electron');
const { fstat } = require('fs');
const path = require('path');
const fs = require('fs')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1800,
    height: 900,
    icon: __dirname + '/app.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  }
  });
  mainWindow.setMenu(null)
  mainWindow.loadFile(path.join(__dirname, 'source/index.html'));
};
function removeTemp() {
  fs.openSync(`${__dirname}/source/LocalTemp.txt`, 'w')
  fs.truncateSync(`${__dirname}/source/LocalTemp.txt`)
}
app.on('ready', createWindow);
app.on('ready', removeTemp);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
var ipc = require('electron').ipcMain;
ipc.on('app', (event, arg) => {
  console.log(1)
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


