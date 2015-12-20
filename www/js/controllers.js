angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope) {

})

.controller('SignupCtrl', function($scope) {

})

.controller('GroupEntriesCtrl', function($scope) {

})

.controller('AddGroupCtrl', function($scope) {

})

.controller('MyAccountCtrl', function($scope) {

})

.controller("ExampleController", function($scope, $cordovaBarcodeScanner) {

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

})

.controller('MyGroupsCtrl', function($scope, $state, $ionicSlideBoxDelegate, groupList) {

  $scope.groups = groupList.data._embedded.groupResourceList;

/*
$scope.groups =
  [
    {'title': 'Nexus S',
     'description': 'Fast just got faster with Nexus S.'},
    {'title': 'Motorola XOOM™ with Wi-Fi',
     'description': 'The Next, Next Generation tablet.'},
    {'title': 'MOTOROLA XOOM™',
     'discription': 'The Next, Next Generation tablet.'}
  ];
  */


  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('myGroups');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
});
