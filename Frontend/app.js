angular.module("myApp", ['ngRoute','myApp.page1', 'myApp.page2'])
.config(['$routeProvider','$locationProvider', function($routeProvider) {
    // $locationProvider.hashvalue('!');
    $routeProvider.otherwise({

        redirectTO:"/page1"
    })


}]);
