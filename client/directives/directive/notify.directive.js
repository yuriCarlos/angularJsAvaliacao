angular.module('app')
.directive('notifyDashboard',[
	'$rootScope',
	function($rootScope){
	return {
		restrict:'E',
		templateUrl:'directives/template/notify.html',
		link: function(scope, element, attrs){
			scope.messages = [];
			scope.closeNotification = function(id){
				scope.messages.splice(id, 1);
			}

			window.messages = scope.messages;

			scope.$on('addNotification', function(args, data){
				scope.messages.push(data);
			});
		}
	};

}]);