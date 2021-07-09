const {app, BrowserWindow} = require('electron');

function createWindow() {
 const win = new BrowserWindow({width: 800, height: 800,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    },
    resizable: false
});
    win.loadURL(`http://localhost:4200`);
//   if (process.env.DEBUG) {
//     win.loadURL(`http://localhost:4200`);
//   }
//   else {
//     win.loadURL(`file://${__dirname}/dist/integrate-angular/index.html`);
//   }
}

app.on('ready', createWindow);