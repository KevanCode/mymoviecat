/**
 * Created by kevan on 2017/10/17.
 */

(function(angular){
	'use strict';
    angular.module('moviecat.movie_list',['ngRoute','moviecat.angular.http'])

		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/:category/:page',{
				templateUrl:'movie_list/view.html',
				controller:'MovieListController'
			})

		}])
		.controller('MovieListController',['$scope','$route','$routeParams','HttpService','AppConfig',function($scope,$route,$routeParams,HttpService,AppConfig){
			$scope.movies=[];
			$scope.page=parseInt($routeParams.page);
			$scope.count=AppConfig.pageSize;
			$scope.start=($scope.page-1)*$scope.count;
			$scope.totalItems=0;
			$scope.loading=true;
			$scope.currentPage=$scope.page;
			$scope.title='Loading';
		    HttpService.jsonp(
				AppConfig.listApiAddress + $routeParams.category,
				{start:$scope.start,count:$scope.count,q:$routeParams.q},
				function(data){
					$scope.movies=data;
					$scope.totalItems=data.total;
					$scope.totalPages=Math.ceil($scope.totalItems/$scope.count);
					$scope.title=data.title;
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
