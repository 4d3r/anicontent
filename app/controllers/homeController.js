const path = require('path');
const fs = require('fs');

const ANIME_DIRECTORY = path.join(__dirname, '../database');

function getFiles(folderPath) {
  try {
    if (!fs.existsSync(folderPath)) {
      console.error(`Directory does not exist: ${folderPath}`);
      return [];
    }
    
    return fs.readdirSync(folderPath);
  } 
  catch(err) {
    console.error("Error reading directory:", err);
    return [];
  }
}

function getAnimesFromDatabase() {
  const files = getFiles(ANIME_DIRECTORY);
  const animes = []

  files.forEach(fileName => {
    const data = require(path.join(ANIME_DIRECTORY, fileName))

    if (!data || !data.name) {
      return;
    }

    animes.push(data)
  });

  console.log(animes)

  return animes
}

module.exports = {getAnimesFromDatabase}