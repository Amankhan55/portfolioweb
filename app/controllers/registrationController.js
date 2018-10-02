app.controller('registraionController', ['$scope', 'registrationService',
    function ($scope, registrationService) {
        $scope.goToLogin = function() {
            location.hash = "#/login";
        };

        var baseUrl = 'http://172.31.57.145:8080/api/credential/';
        $scope.registartion = function () {
            var user = {
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                email: $scope.email,
                password: $scope.password,
                mb_no: $scope.mb_no,
                address: $scope.address,
                city: $scope.city,
                country: $scope.country
            }
            if (user.email !== undefined && user.password !== undefined) {
                var apiRoute = baseUrl + 'saveCredential/';
                var checkUser = registrationService.post(apiRoute, user);
                checkUser.then(function (response) {
                    $scope.clearRegForm();
                    if (response.data != "") {
                        alert("Register Successfully..");
                        $scope.goToLogin();
                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }
        $scope.clearRegForm = function() {
            $scope.firstname = "";
            $scope.lastname = "";
            $scope.email = "";
            $scope.password = "";
            $scope.mb_no = "";
            $scope.address = "";
            $scope.city = "";
            $scope.country = "";
        }
    }
]);