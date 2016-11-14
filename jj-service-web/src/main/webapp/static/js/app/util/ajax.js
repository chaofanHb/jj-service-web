define([
	'app/util/dialog'
], function(dialog) {
	var cache = {};
	return {
		/**
		 * data request through get should be cached in per page
		 * add timestamp after url can clear server and browser cache
		 * */
		get: function(url, param, reload, sync) {
			if (typeof param == 'boolean' || typeof param == 'undefined') {
				reload = param;
				param = {};
			}
			var tokenStr = '_=' + new Date().valueOf(),
				symbol = (url.indexOf('?') === -1 ? '?' : '&');
			if (url && !/_=.*/.test(url)) {
				var send_url = url + symbol + tokenStr;
			}
			var cache_url = url + JSON.stringify(param);
			if (reload) {
				delete cache[cache_url];
			}
			if (!cache[cache_url]) {
				cache[cache_url] = $.ajax({
					async: !sync,
					type: 'get',
					url: send_url,
					data: param
				});
				cache[cache_url].then(function(res) {
					if(res.timeout){
						sessionStorage.removeItem("user");
						sessionStorage.removeItem("login");
						sessionStorage.removeItem("type");
						location.href = "../xuser/login.html?return=" + encodeURIComponent(location.pathname + location.search);
					}
				}, function() {
					var d = dialog({
						content: '<img src="data:image/png;base64,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" style="width: 44px;"/>非常抱歉，暂时无法获取数据！</br>不如刷新一下试试？',
						quickClose: true
					});
					d.show();
					setTimeout(function () {
						d.close().remove();
					}, 2000);
				});
			}
			return cache[cache_url];
		},

		post: function(url, param) {
			var specialCode = /^[\s0-9a-zA-Z\u4e00-\u9fa5\u00d7\u300a\u2014\u2018\u2019\u201c\u201d\u2026\u3001\u3002\u300b\u300e\u300f\u3010\u3011\uff01\uff08\uff09\uff0c\uff1a\uff1b\uff1f\uff0d\uff03\uffe5\x21-\x7e]*$/;
			var flag = false;
			for(var n in param){
				if(!specialCode.test(param[n])){
					flag = true;
					break;
				}
			}
			if(flag){
				var defer = jQuery.Deferred();
                defer.resolve({success: false, msg: "提交表单中含特殊字符"});
                return defer.promise();
			}
			var promise = $.post(url, param);
			promise.then(function(res) {
				if(res.timeout){
					sessionStorage.removeItem("user");
					sessionStorage.removeItem("login");
					sessionStorage.removeItem("type");
					location.href = "../xuser/login.html?return=" + encodeURIComponent(location.pathname + location.search);
				}
			}, function() {
				var d = dialog({
					content: '<img src="data:image/png;base64,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" style="width: 44px;"/>非常抱歉，暂时无法获取数据！</br>不如刷新一下试试？',
					quickClose: true
				});
				d.show();
				setTimeout(function () {
					d.close().remove();
				}, 2000);
			});
			return promise;
		}
	};
});