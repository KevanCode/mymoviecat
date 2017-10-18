/**
 * Created by kevan on 2017/10/17.
 */

(function(angular){
	'use strict';
    angular.module('moviecat.in_theaters',['ngRoute','moviecat.angular.http'])

		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/in_theaters/:page',{
				templateUrl:'in_theaters/view.html',
				controller:'InTheatersController'
			})

		}])
		.controller('InTheatersController',['$scope','$route','$routeParams','HttpService',function($scope,$route,$routeParams,HttpService){
			$scope.movies=[];
			$scope.page=parseInt($routeParams.page);
			$scope.count=5;
			$scope.start=($scope.page-1)*$scope.count;
			$scope.totalItems=0;
			$scope.loading=true;
			$scope.currentPage=$scope.page;
		    HttpService.jsonp(
				'http://api.douban.com/v2/movie/in_theaters',
				{start:$scope.start,count:$scope.count},
				function(data){
					$scope.movies=data;
					$scope.totalItems=data.total;
					$scope.totalPages=Math.ceil($scope.totalItems/$scope.count);
					$scope.loading=false;
					$scope.$apply();
			});
			$scope.go=function(page){
				if(page>=1 && page<=$scope.totalPages){
					$route.updateParams({page:page});
				}
			}
		}]);
})(angular);
