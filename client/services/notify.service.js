angular.module('app')
.service('notifyService', [
	'$rootScope',
	function($rootScope){
		this.notify = function(type, title, message){
			$rootScope.$broadcast('addNotification', 
				{
					type: type,
					body: message,
					title:title
				}
			);
		}
	}
])