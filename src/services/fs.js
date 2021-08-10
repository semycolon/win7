import * as BrowserFS from 'browserfs';
import { join } from 'path-browserify';
import { getFileType } from './apps';

import { extname, basename, dirname } from 'path-browserify';

export function isFile(filePath) {
  return !!extname(filePath);
}

export function isDirectory(filePath) {
  return !extname(filePath);
}

const FS_BACKEND = 'InMemory';
const FS_BACKEND_OPTIONS = {};

export function reverseSlash(filePath) {
  return filePath.replace(/\//g, '/');
}

let fs = {};

function getFS() {
  return new Promise((resolve, reject) => {
    BrowserFS.configure({
      fs: FS_BACKEND,
      options: FS_BACKEND_OPTIONS,
    }, function (e) {
      if (e) {
        reject(e);
      }
      const _fs = BrowserFS.BFSRequire('fs');
      resolve(_fs);
    });
  });
}

function _writePrograms() {
  //actual vue applications
  fs.writeFileSync('/C:/Windows/System32/Explorer.exe', 'Explorer', { encoding: 'utf8' });
  fs.writeFileSync('/C:/Windows/System32/Notepad.exe', 'Notepad', { encoding: 'utf8' });
  fs.writeFileSync('/C:/Windows/System32/MediaPlayer.exe', 'MediaPlayer', { encoding: 'utf8' });
  //fs.writeFileSync('/C:/Windows/System32/BluePage.exe', 'BluePage', { encoding: 'utf8' });
  fs.writeFileSync('/C:/Program Files/Camera.exe', 'Camera', { encoding: 'utf8' });

  //web apps
  const methodDraw = {
    'icon': 'https://editor.method.ac/images/favicon.svg',
    'url': 'https://editor.method.ac/',
    'width': 900,
    'height': 700
  };
  const snap =   {
    "icon": "https://passenger-pwa-cdn.snapp.ir/logos/square-minimal-144.png",
    "url": "https://app.snapp.taxi/",
    "width": 500,
    "height": 800
  };
  const Viska = {
    "icon": "https://viska.chat/logo-transparent.png",
    "url": "https://viska.chat/",
    "width": 500,
    "height": 800
  }

  const win93 = {
    "icon": "https://v1.windows93.net/favicon.ico",
    "url": "https://v1.windows93.net/",
    "width": 1000,
    "height": 800
  }

  fs.writeFileSync('/C:/Program Files/Method Draw.wapp', JSON.stringify(methodDraw), { encoding: 'utf8' });
  fs.writeFileSync('/C:/Program Files/Snap.wapp', JSON.stringify(snap), { encoding: 'utf8' });
  fs.writeFileSync('/C:/Program Files/Viska.wapp', JSON.stringify(Viska), { encoding: 'utf8' });
  fs.writeFileSync('/C:/Program Files/win93.wapp', JSON.stringify(win93), { encoding: 'utf8' });

  //shortcuts
  fs.writeFileSync('/C:/User/Desktop/My Computer.link', '/C:/Windows/System32/Explorer.exe', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Desktop/Notepad.link', '/C:/Windows/System32/Notepad.exe', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Desktop/Hayde - Saghi.link', '/C:/User/Music/Hayde - Saghi.mp3', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Desktop/Method Draw.link', '/C:/Program Files/Method Draw.wapp', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Desktop/Snap!.link', '/C:/Program Files/Snap.wapp', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Desktop/Viska.link', '/C:/Program Files/Viska.wapp', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Desktop/win93.link', '/C:/Program Files/win93.wapp', { encoding: 'utf8' });


  fs.mkdirSync('/C:/User/Desktop/New Folder');
  fs.writeFileSync('/C:/User/Desktop/New Folder/Text File.txt', 'hello world', { encoding: 'utf8' });
}

function _writeStartMenuItem() {
  fs.writeFileSync('/C:/User/Start Menu/My Computer.link', '/C:/Windows/System32/Explorer.exe', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Start Menu/Desktop.link', '/C:/User/Desktop', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Start Menu/Documents.link', '/C:/User/Documents', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Start Menu/Music.link', '/C:/User/Music', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Start Menu/Pictures.link', '/C:/User/Pictures', { encoding: 'utf8' });
}

async function populateFS() {
  fs.mkdirSync('/C:');
  fs.mkdirSync('/D:');

  fs.mkdirSync('/C:/User');
  fs.mkdirSync('/C:/Program Files');
  fs.mkdirSync('/C:/Windows');
  fs.mkdirSync('/C:/Windows/System32');

  fs.mkdirSync('/C:/User/Desktop');
  fs.mkdirSync('/C:/User/Documents');
  fs.mkdirSync('/C:/User/Music');
  fs.mkdirSync('/C:/User/Pictures');
  fs.mkdirSync('/C:/User/Start Menu');

  _writePrograms();
  _writeStartMenuItem();

  fs.writeFileSync('/C:/User/Desktop/TextFile.txt', 'hello world', { encoding: 'utf8' });
  fs.writeFileSync('/C:/User/Music/Hayde - Saghi.mp3', 'https://dl.dl2musica.com/singles/0003/Hayedeh%20-%20Saghi.mp3', { encoding: 'utf8' });
}

export async function initFS() {
  fs = await getFS();
  if (FS_BACKEND === 'InMemory') {
    await populateFS();
  }
}

export function createNewFile(fileObject) {
  return undefined;
}

export function getPathName() {
}

export function resolveFileRunner() {
}

export function resolveFileSource() {
}

export function fileObject(path, type, data = {}, ...extras) {
  return {
    path,
    type,
    extras: { ...extras },
  };
};

export function fileRef(path, type) {
  return {
    path,
    type
  };
}

export async function readDirectory(path) {
  await new Promise(r => setTimeout(r, 500));
  return new Promise((resolve, reject) => {
    fs.readdir(path, function (e, data) {
      if (e) {
        return reject(e);
      }
      data = data.map(it => join(path, it));
      resolve(data);
    });
  });
}

export async function fetchTextFile(path) {
  //await new Promise(r => setTimeout(r,1500));
  return fetchFile(path, { encoding: 'utf8' });
}

export async function fetchFile(path, options = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, function (e, data) {
      if (e) {
        return reject(e);
      }
      resolve(data);
    });
  });
}

export async function deletePath(path) {
  if (isDirectory(path)) {
    return deleteDirectory(path);
  } else {
    return deleteFile(path);
  }
}

export async function deleteFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, function (e) {
      if (e) {
        return reject(e);
      }
      resolve();
    });
  });
}

function isEmptyDirectory(filePath) {
  const list = fs.readdirSync(filePath);
  return list.length === 0;
}

export async function deleteDirectory(filePath) {
  if (isEmptyDirectory(filePath)) {
    fs.rmdirSync(filePath);
  } else {
    throw new Error('Folder is not empty!');
  }
}

function existsPath(filePath) {
  return fs.existsSync(filePath);
}

function getNewFolderName(baseDir) {
  const newName = (i) => `New Folder${i > 1 ? ` (${i})` : ''}`;
  let i = 1;
  let folderName;
  do {
    folderName = join(baseDir, newName(i));
    i += 1;
  } while (existsPath(folderName));
  return newName(i - 1);
}

function getNewTextFileName(baseDir, fileName = 'Text File') {
  const newName = (i) => `${fileName}${i > 1 ? ` (${i})` : ''}.txt`;
  let i = 1;
  let name;
  do {
    name = join(baseDir, newName(i));
    i += 1;
  } while (existsPath(name));
  return newName(i - 1);
}

export async function createNewFolder(filePath, directoryName) {
  if (!directoryName) {
    directoryName = getNewFolderName(filePath);
  }
  return new Promise((resolve, reject) => {
    const newDirPath = join(filePath, directoryName);
    fs.mkdir(newDirPath, function (e) {
      if (e) {
        return reject(e);
      }
      resolve();
    });
  });
}

export async function createNewTextFile(filePath, fileName, content = '') {
  if (!fileName || existsPath(join(filePath, fileName))) {
    fileName = getNewTextFileName(filePath);
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(join(filePath, fileName), content, { encoding: 'utf8' }, function (e) {
      if (e) {
        return reject(e);
      }
      resolve();
    });
  });
}

export async function escapeShortcut(filePath) {
  const type = getFileType(filePath);
  if (type === 'shortcut') {
    return await fetchTextFile(filePath);
  }
  return filePath;
}

export async function writeTextFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, { encoding: 'utf8' }, function (e) {
      if (e) {
        return reject(e);
      }
      resolve();
    });
  });
}

export async function renamePath(filePath, newName) {
  fs.renameSync(filePath, join(dirname(filePath), newName));
}

export async function moveFile(filePath, directory) {
  fs.renameSync(filePath, directory);
}

export async function copyFile(filePath, directory) {
  const fileContent = await fetchFile(filePath);
  let fileName = basename(filePath);
  let targetFile;
  while (true) {
    targetFile = join(directory, fileName);
    if (!fs.existsSync(targetFile)) {
      break;
    }
    fileName = 'copy of ' + fileName;
  }
  fs.writeFileSync(targetFile, fileContent);
}
