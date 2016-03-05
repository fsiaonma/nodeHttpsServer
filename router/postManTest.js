"use strict";

/**
 * node端：测试 postman 路由
 *
 * @author sam.sin
 * @class postManTest
 * @constructor
 */
module.exports = (function() {
	return function(router) {
        /**
		 * get 请求
		 *
		 * @param {Object} req 请求头
		 * @param {Object} res 响应头 
		 * @method get
		 */
		router.get("/",function(req, res) {
			console.log(req, req.body, req.query, req.params);
			res.send({});
		});

		/**
		 * post 请求
		 *
		 * @param {Object} req 请求头
		 * @param {Object} res 响应头 
		 * @method post
		 */
		router.post("/",function(req, res) {
			console.log(req.body, req.query, req.params);
			res.send();
		});

		/**
		 * put 请求
		 *
		 * @param {Object} req 请求头
		 * @param {Object} res 响应头 
		 * @method put
		 */
		router.put("/",function(req, res) {
			console.log(req.body, req.query, req.params);
			res.send();
		});

		/**
		 * delete 请求
		 *
		 * @param {Object} req 请求头
		 * @param {Object} res 响应头 
		 * @method delete
		 */
		router.delete("/",function(req, res) {
			console.log(req.body, req.query, req.params);
			res.send();
		});
    }
})();
