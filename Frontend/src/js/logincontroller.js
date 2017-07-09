var pageControllers = angular.module('pageControllers', []);


pageControllers.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.errmessage = '';
    $scope.login = function () {
        if ($scope.name) {
            if (($scope.name == 'admin') && ($scope.password == 'admin')) {
                ticket = true;
                $location.path('/studentlist');
            } else {
                $scope.errmessage = 'Please enter valid credentials of ' + $scope.Role;
            }
        } else {
            $scope.errmessage = 'Please enter valid credentials of '+$scope.Role;
        }
    };
    
}]); 