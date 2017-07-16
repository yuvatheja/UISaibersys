angular.module("myApp.page2", ['ngRoute','firebase'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/page2',{
            templateUrl: "page2/page2.html",
            controller:"page2Ctrl"



        });


    }]).controller('page2Ctrl',function($scope, $firebaseArray){
        $scope.addStudent = function () {
            var ref =  firebase.database().ref("students");
            $firebaseArray(ref).$add($scope.student)
                .then(
                    function (ref) {
                        $scope.student.name = "";
                        $scope.student.department="";
                        $scope.student.level="";
                        
                    },
                    function (error) {
                        console.log(error);

                    }

                )
            
        }

    console.log('page2');

})