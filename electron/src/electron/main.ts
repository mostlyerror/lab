import { app, BrowserWindow } from 'electron'
import path from 'path'

// some typescript test code
// type _test = string;

app.on('ready', () => {
  let mainWindow = new BrowserWindow({})
  // can't juse use this: mainWindow.loadFile('dist-react/index.html')
  // Because we don't actually know where the app is running from
  // We also need to use node's path.join() because we don't know what backslash
  // format the OS supports
  mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
})