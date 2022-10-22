var num_req = 0;

function requestNumberingMiddleware(req, res, next) {
  num_req += 1;
  req.num_req = num_req;
  next();
};

module.exports = requestNumberingMiddleware;
