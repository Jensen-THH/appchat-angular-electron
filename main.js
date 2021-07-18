const {app,Menu, BrowserWindow,nativeImage} = require('electron');
function createWindow() {
 const win = new BrowserWindow({width: 800, height: 715,
    icon: nativeImage.createFromPath('./logo2.png'),
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        nativeWindowOpen: true,
        // enableRemoteModule: false
        
    },
    resizable: false
});
// win.webContents.setUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0";
// win.webContents.setUserAgent(win.webContents.getUserAgent() + " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
// win.webContents.setUserAgent(win.webContents.getUserAgent() + "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
const menu = Menu.buildFromTemplate([]);
Menu.setApplicationMenu(menu);
    // win.loadURL(`file://dist/chatapp/index.html`,{userAgent: 'Edge'});
    // win.loadFile('./dist/chatapp/index.html')
    win.loadFile('./angular/index.html')
    // win.loadURL(
    //     url.format({
    //       pathname: path.join(__dirname, `index.html`),
    //       protocol: "file:",
    //       slashes: true
    //     })
    //   );
    // win.loadURL('./dist/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})