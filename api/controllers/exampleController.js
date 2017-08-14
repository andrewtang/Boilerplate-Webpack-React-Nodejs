'use strict';

var https = require('https');

// GET /api/example
exports.list = function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');
  return res.json(
    [
      {
        id: 1,
        obj: {}
      },
      {
        id: 2,
        obj: {}
      },
      {
        id: 3,
        obj: {}
      }
    ]
  );
};

// GET /api/example/:id
exports.find = function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');
  return res.json({
    id: req.params.id,
    obj: {}
  });
};
