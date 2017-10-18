/**
 * Created by kevan on 2017/10/17.
 */

/*自己创建跨域JSONP*/
(function(window,document){
	var jsonp=function(url,data,callback){
		var cb='cb_jp_'+Math.random().toString().replace('.','');
		window[cb]=callback;
	    var paramdata=url.indexOf('?')==-1?'?':'';
		for(var key in data){
			paramdata+=key+'='+data[key]+'&';
		}
	    var script=document.createElement('script');
		script.src=url+paramdata+'callback='+cb;
		document.body.appendChild(script);
	};
	window.$jsonp=jsonp;
})(window,document);
