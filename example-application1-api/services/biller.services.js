const  logs  = require("../logging/log-service");
const connectors = require("../connectors");

exports.callBiller = async (biller) => {
  logs("[INFO]", "Invoking biller:", biller);
  const data = await connectors.callBillerApi(biller);
  return data;
};

exports.getBillers = async () => {
  logs("[INFO]", "Getting billers");
  const data = await connectors.getBillers();
  return data;
};

exports.getBiller = async (biller) => {
  logs("[INFO]", "Getting biller:", biller);
  const data = await connectors.getBiller(biller);
  return data;
};
