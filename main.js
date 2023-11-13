const path = require('path');
const {app, BrowserWindow, Menu} = require("electron");

const isDev = process.env.NODE_ENV !== 'production';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: "Calendar",
        autoHideMenuBar: "true",
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.maximize();

    if(isDev){
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    // const mainMenu = Menu.buildFromTemplate(menu);
    // Menu.setApplicationMenu(mainMenu);

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    });
});

const menu = [
    {
        label: 'File',
        submenu: {
            label: 'Quit',
            click: () => app.quit(),
            accelerator: 'CmdOrCtrl+W'
        }
    }
];

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
