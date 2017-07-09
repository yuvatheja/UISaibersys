var myApp = angular.module('myApp', [
    'ngRoute',
    'pageControllers'
]);

myApp.value('ticket', false);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
        when('/home', {
            templateUrl: 'html/home.html',
            controller: 'LoginController'
        }).
        when('/studentlist', {
            resolve: {
                "check": function ($location) {
                    if (!ticket) {
                        $location.path('/home');
                    }
                }
            },
            templateUrl: 'html/studentlist.html'
        }).
        when('/weeklystatus', {
            resolve: {
                "check": function ($location) {
                    if (!ticket) {
                        $location.path('/home');
                    }
                }
            },
            templateUrl: 'html/weeklystatus.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
    $locationProvider.html5Mode(false);
}]);