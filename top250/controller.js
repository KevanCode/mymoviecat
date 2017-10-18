/**
 * Created by kevan on 2017/10/17.
 */

(function(angular){
	'use strict';
    angular.module('moviecat.top250',['ngRoute'])

		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/top250/:page',{
				templateUrl:'top250/view.html',
				controller:'Top250Controller'
			})

		}])
		.controller('Top250Controller',['$scope',function($scope){

		}]);
})(angular);
