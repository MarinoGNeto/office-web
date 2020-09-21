app.controller('PurchaseRequestsController', [
    '$scope',
    '$http',
    PurchaseRequestsController
]);

function PurchaseRequestsController($scope, $http) {

    $scope.request = {
        requester : "",
        itemDescription : "",
        productValue : ""
    };

    $scope.requestsList = [];

    $scope.requestDisapproved = {
        disapprovedMessage : ""
    };
    

    $scope.saveForm = function() {

        $http.post('http://localhost:8080/purchaseRequest', $scope.request).success(function(data) {
        })        
    }

    $http.get('http://localhost:8080/purchaseRequest').then(function(response) {
        $scope.requestsList = response.data;
    });

    $scope.changeStatusToApproved = function(index) {

        $http.put('http://localhost:8080/purchaseRequest/approve/' + $scope.requestsList[index].id).success(function(data) {
        })
    };

    $scope.getIdFirst = function(index) {
        
        var idPurchaseRequest = $scope.requestsList[index].id;
        

        return idPurchaseRequest;
    };

    $scope.changeStatusToDisapproved = function(index) {

        $http.put('http://localhost:8080/purchaseRequest/disapprove/' + $scope.requestsList[index].id, $scope.requestDisapproved).success(function(data) {
        })
    };

    




};
