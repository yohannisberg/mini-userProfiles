angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";

    $scope.test123 = mainService.testing;

    $scope.users = mainService.getUsers();

    //don't need to invoke, 
    $scope.toggleFavorite=mainService.toggleFavorite;

})
