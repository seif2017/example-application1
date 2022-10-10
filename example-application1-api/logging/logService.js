const fs = require('fs-extra');
module.exports = {
    async logs(text) {
        var datetime = new Date();
        var date=datetime.toISOString().slice(0,10);
        var dir = "./logs/log_core_"+date+".log";
        fs.ensureFileSync(dir)
        let content = text;
        content += "\n";
        fs.appendFile(dir, content, (err) => {
            return console.log(err);
        });
    }
}