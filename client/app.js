angular.module('app',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
    .when('/new',{templateUrl:'views/template/new.html', controller:'newCtrl'})
    .when('/edit/:id',{templateUrl:'views/template/new.html', controller:'newCtrl'})
    .when('/',{templateUrl:'views/template/list.html', controller:'listCtrl'})
	.otherwise({redirectTo: '/'})

}]);