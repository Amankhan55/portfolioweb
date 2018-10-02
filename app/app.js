var app;
(function() {
    'use strict';
       app = angular.module('app', ["ui.router"]);
       app.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
        
            $stateProvider
                .state("login", {
                   url: "/login",
                   templateUrl: "views/login.html",
                   controller: "loginController"
                })
                .state("register", {
                   url: "/register",
                   templateUrl: "views/registration.html",
                   controller: "registraionController"
                })
            });
        app.constant("globalConfig", {
            apiAddress: 'http://172.31.57.145:8080/api'
        });
        app.controller('homeController', ['$scope', function($scope) {
            var hash = window.location.hash;
            $scope.showFlag = true;
            $scope.showFlagFun = function(hash) {
                switch(hash) {
                    case '#/': 
                        $scope.showFlag = true;
                    break;
                    case '#/login': 
                        $scope.showFlag = false;
                    break;
                    case '#/register': 
                        $scope.showFlag = false;
                    break;
                }
            }
            $scope.showFlagFun(hash);
        }])
    })
();
   