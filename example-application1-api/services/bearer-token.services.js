const  logs  = require("../logging/log-service");
const connectors = require("../connectors");

exports.newToken = async (user) => {
  logs("[INFO]", "Generating token for user:", user);
  // const data = await connectors.callBillerApi(biller);
  const token="tttt"
  return token;
};

exports.verifyToken = async (token) => {
  logs("[INFO]", "Generating token for user:", user);
  // const data = await connectors.callBillerApi(biller);
  const res="token valid + user ..."
  return res;
};

