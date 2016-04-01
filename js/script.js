var viewsApp = angular.module('viewsApp',['ngRoute']);

viewsApp.config(function($routeProvider){});
viewsApp.controller('viewsController',function($scope) {
    $scope.message = 'hello world'
});