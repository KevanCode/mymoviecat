/**
 * Created by kevan on 2017/10/17.
 */
(function (angular) {
	angular.module('moviecat.angular.http',[])
		.service('HttpService',['$window','$document',function($window,$document){
			this.jsonp=function(url,data,callback){
				var paramdata=url.indexOf('?')==-1?'?':'&';
				if(typeof data=='function'){
					callback=data;
				}else{
					for(var key in data){
						paramdata+=key+'='+data[key]+'&';
					}
				}
				var fnSuffix='my_js_cb'+Math.random().toString().replace('.','');
				var script=$document[0].createElement('script');
				script.src=url+paramdata+'callback='+fnSuffix;
				$document[0].body.appendChild(script);
				window[fnSuffix]=function(data){
					callback(data);
					$document[0].body.removeChild(script);
				};//不推荐这样赋值
			}
		}])
})(angular);
