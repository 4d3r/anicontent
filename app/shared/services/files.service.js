const fs = require('fs')

function isExists(directory) {
    return fs.existsSync(directory)
}

function readDirectory(directory) {
     try {
            if (!isExists(directory)) {
                console.error(`Directory does not exist: ${directory}`);
                return [];
            }
            
            return fs.readdirSync(directory);
        } 
        catch(err) {
            console.error("Error reading directory:", err);
            return [];
        }
}

module.exports = {
    isExists,
    readDirectory
}