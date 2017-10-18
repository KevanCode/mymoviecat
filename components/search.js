/**
 * Created by kevan on 2017/10/18.
 */
(function(angular){
	angular.module('moviecat.search',['ngRoute'])
		.directive('search',['$location','$route',function($location,$route){
			return{
				scope:{},//
				restrict:'AE',
				template:'<form class="navbar-form navbar-right" ng-submit="search()"><input type="text" class="form-control" placeholder="Search..." ng-model="text"></form>',
				replace:true,
				link:function($scope,iElm,iAttrs,controller){
					$scope.text='';
					$scope.search=function(){
						if($scope.text){
							$route.updateParams({'category':'search','q':$scope.text});
							$scope.text='';
						}
						
					}
				}
			}
		}]);
})(angular);
