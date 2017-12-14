(function () {
  var app = angular.module("githubViewer");

  var MainController = function ($scope, $location, $anchorScroll) {
    $scope.search = function (username) {
      if (username) {
        $location.path("/user/" + username);
      }
    };
  };

  app.controller("MainController", MainController);
})();


