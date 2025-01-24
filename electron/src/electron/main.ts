import { app, BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './util.js'

// some typescript test code
// type _test = string;

app.on('ready', () => {
  let mainWindow = new BrowserWindow({})
  if (isDev()) {

    // can't juse use this: mainWindow.loadFile('dist-react/index.html')
    // Because we don't actually know where the app is running from
    // We also need to use node's path.join() because we don't know what backslash
    // format the OS supports
    mainWindow.loadURL('http://localhost:5123')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }
})