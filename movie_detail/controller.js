/**
 * Created by kevan on 2017/10/17.
 */

(function(angular){
	'use strict';
    angular.module('moviecat.movie_detail',['ngRoute','moviecat.angular.http'])

		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/detail/:id',{
				templateUrl:'movie_detail/view.html',
				controller:'MovieDetailController'
			})

		}])
		.controller('MovieDetailController',['$scope','$route','$routeParams','HttpService','AppConfig',function($scope,$route,$routeParams,HttpService,AppConfig){
			$scope.movie={};
			$scope.loading=true;
		    HttpService.jsonp(
				AppConfig.detailApiAddress + $routeParams.id,
				function(data){
					$scope.movie=data;
					$scope.loading=false;
					$scope.$apply();
			});
		}]);
})(angular);
