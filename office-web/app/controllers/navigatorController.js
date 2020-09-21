app.controller('NavigatorController', [
    '$scope',
    NavigatorController
]);

function NavigatorController($scope) {

    $scope.logged = false;
    $scope.administrator = false;
    $scope.storekeeper = false;
    $scope.requester = false;

    $scope.isAdministrator = function() {

        $scope.administrator = true;
        $scope.storekeeper = false;
        $scope.requester = false;
        $scope.logged = true;
    }

    $scope.isRequester = function() {

        $scope.administrator = false;
        $scope.storekeeper = false;
        $scope.requester = true;
        $scope.logged = true;
    }

    $scope.isStorekeeper = function() {

        $scope.administrator = false;
        $scope.storekeeper = true;
        $scope.requester = false;
        $scope.logged = true;
    }

    $scope.logout = function() {

        $scope.logged = false;
        $scope.requester = false;
        $scope.storekeeper = false;
        $scope.administrator = false;
    }
}