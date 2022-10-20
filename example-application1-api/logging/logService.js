const fs = require("fs-extra");
var util = require("util");

module.exports = {
  async logs() {
    var datetime = new Date();
    var file = "./logs/log_core_" + datetime.toLocaleDateString("sv-SE") + ".log";
    fs.ensureFileSync(file);
    let content =
      datetime.toLocaleString("sv-SE");
    for (var i in arguments) {
      content += " " + util.format(arguments[i]);
    }
    console.log(content);
    content += "\n";
    fs.appendFile(file, content, (err) => {});
  },
};
