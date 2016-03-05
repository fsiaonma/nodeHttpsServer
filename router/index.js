'use strict';

var express = require('express');
var router = express.Router();

/**
 * node端：API 路由
 *
 * @author sam.sin
 * @constructor
 */
module.exports = function() {
	require("./postManTest")(router);
    return router;
};