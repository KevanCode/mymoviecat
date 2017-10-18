'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
	'ngRoute',
	'moviecat.movie_detail',
	'moviecat.movie_list',
	'moviecat.directives.auto_focus',
	'moviecat.search',
	'moviecat.loading'
	// 'moviecat.in_theaters',
	// 'moviecat.coming_soon',
	// 'moviecat.top250'
])
	// 为模块定义一些常量
	.constant('AppConfig', {
		pageSize: 10,
		listApiAddress: 'http://api.douban.com/v2/movie/',
		detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
	})
	.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
