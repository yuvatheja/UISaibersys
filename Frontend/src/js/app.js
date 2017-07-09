var myApp = angular.module('myApp', [
    'ngRoute',
    'pageControllers'
]);

myApp.value('ticket', false);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
        when('home', {
            templateUrl: 'views/home.html',
            controller: 'LoginController'
        }).
        when('/studentlist', {
            templateUrl: 'views/studentlist.html'
        }).
        when('/weeklystatus', {
            templateUrl: 'views/weeklystatus.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
    $locationProvider.html5Mode(false);
}]);