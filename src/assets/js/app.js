var app = angular.module('ListaContato', []);
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
