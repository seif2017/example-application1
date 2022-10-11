const fs = require("fs-extra");
var util = require("util");

module.exports = {
  async logs() {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    var dir = "./logs/log_core_" + date + ".log";
    fs.ensureFileSync(dir);
    let content =
      datetime.toLocaleDateString() + " " + datetime.toLocaleTimeString("fr");
    for (var i in arguments) {
      content += " " + util.format(arguments[i]);
    }
    console.log(content);
    content += "\n";
    fs.appendFile(dir, content, (err) => {});
  },
};
