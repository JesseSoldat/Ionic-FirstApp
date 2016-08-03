angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


.controller('CharactersCtrl', function($scope, $http, $stateParams){

  $http.get('js/data.json').success(function(data){
    // console.log(data);
    $scope.characters = data;
  });

  $scope.charId = $stateParams.id;
  

  $scope.onItemDelete = function(char){
    $scope.characters.splice($scope.characters.indexOf(char), 1);
  };

  $scope.moveItem = function(char, fromIndex, toIndex){
      $scope.characters.splice(fromIndex, 1);
      $scope.characters.splice(toIndex, 0, char);
  };

  $scope.data = { showDelete: false, showReorder: false};

  $scope.toggleStar = function(char){
    char.star = !char.star;
  };

  $scope.doRefresh = function(){
    $http.get('js/data.json').success(function(data){
      $scope.characters = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

 




});