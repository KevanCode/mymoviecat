/**
 * Created by kevan on 2017/10/18.
 */
(function (angular) {
	angular.module('moviecat.loading', [])
		.directive('loading', function () {
			return {
				restrict: 'AE',
				template: '<div class="mask" ng-show="loading">' +
								'<div class="spinner">'+
									'<div class="dot1"></div>' +
								'<div class="dot2"></div>' +
								'</div>' +
							'</div>',
				replace: true
			}
		});
})(angular);
