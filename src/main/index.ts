import { app, shell, BrowserWindow, ipcMain  } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

import path from 'path'
import os from 'os'
import fs from 'fs'





function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: false
    }
  })

  require('dotenv').config()

  mainWindow.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })


  
  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

ipcMain.on('save-file', (event, data) => {
  const desktopPath = path.join(os.homedir(), 'Desktop');
  const filePath = path.join(desktopPath, 'Inventario.json');

  const [categoriesJSON, productsJSON] = data.split(']');
  console.log(categoriesJSON)
  
  try {
    const categories = JSON.parse(categoriesJSON+']');
    const products = JSON.parse(productsJSON+']');

    

    if(!categories || !products){
      throw new categories('Datos no Validos')
    }

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error('Error al guardar el archivo:', err);
        event.reply('save-file-response', { success: false, error: err.message });
        return;
      }
      console.log('Archivo guardado en el escritorio');
      event.reply('save-file-response', { success: true });
    });
  } catch (err) {
    console.error('Error al procesar el JSON:', err);
    event.reply('save-file-response', { success: false, error: 'Invalid JSON data' });
  }
});



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
