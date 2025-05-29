const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 200,
    //frame: false,
    //transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      contextIsolation: true,
    }
  });

  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);