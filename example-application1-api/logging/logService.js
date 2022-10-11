const fs = require("fs-extra");
var util = require("util");

module.exports = {
  async logs() {
    var datetime = new Date();
    var file = "./logs/log_core_" + datetime.toLocaleDateString().replace("/", "-").replace("/", "-") + ".log";
    fs.ensureFileSync(file);
    let content =
      datetime.toLocaleDateString() + " " + datetime.toLocaleTimeString("fr");
    for (var i in arguments) {
      content += " " + util.format(arguments[i]);
    }
    console.log(content);
    content += "\n";
    fs.appendFile(file, content, (err) => {});
  },
};
