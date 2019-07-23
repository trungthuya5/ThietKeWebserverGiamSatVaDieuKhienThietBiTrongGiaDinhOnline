var app = angular.module('myApp', []);


app.controller('myController', ['$scope', function ($scope) {
    $scope.admin = "ADmin";
    //non-primitive 
    $scope.name = 'Jhon Doe';
    //primitive
}]) 