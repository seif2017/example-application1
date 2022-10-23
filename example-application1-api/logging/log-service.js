const fs = require("fs-extra");
var util = require("util");

async function logs() {
  var datetime = new Date();
  var file = "./logs/log_core_" + datetime.toLocaleDateString("sv-SE") + ".log";  // only date part
  fs.ensureFileSync(file);
  let content = datetime.toLocaleString("sv-SE"); // gives YYYY-MM-DD HH:mm:SS
  for (var i in arguments) {
    content += " " + util.format(arguments[i]);
  }
  console.log(content);
  content += "\n";
  fs.appendFile(file, content, () => {});
}

module.exports = logs;
