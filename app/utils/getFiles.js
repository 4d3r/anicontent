const fs = require('fs');

module.exports = function(path) {
    try {
        if (!fs.existsSync(path)) {
            console.error(`Directory does not exist: ${path}`);
            return [];
        }
        
        return fs.readdirSync(path);
    } 
    catch(err) {
        console.error("Error reading directory:", err);
        return [];
    }
}