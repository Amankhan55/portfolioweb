app.controller('loginController', ['$scope', 'loginService',
    function ($scope, loginService) {
        $scope.goToRegistration = function() {
            location.hash = "#/register";
        };

        var baseUrl = 'http://172.31.57.145:8080/api/credential/';
        $scope.login = function () {
            var credential = {
                email: $scope.email,
                password: $scope.password
            }
            if (credential.email !== undefined && credential.password !== undefined) {
                var apiRoute = baseUrl + 'credentialCheck/';
                var checkUser = loginService.post(apiRoute, credential);
                checkUser.then(function (response) {
                    $scope.clearLoginForm();
                    if (response.data != "") {
                        alert("Login Successfully..");
                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }
        $scope.clearLoginForm = function() {
            $scope.email = "";
            $scope.password = "";
        }
    }
]);