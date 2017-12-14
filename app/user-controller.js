(function () {
  var app = angular.module("githubViewer");

  var UserController = function ($scope, github, $routeParams) {
    $scope.pageTitle = "Github Profile Viewer";
    $scope.filterType = "+name";

    var onUserComplete = function (data) {
      $scope.user = data;
      github.getRepos(data)
        .then(onRepos, onError);
    }

    var onError = function (reason) {
      $scope.error = "Could not fetch the data";
    };

    var onRepos = function (data) {
      $scope.repos = data;
    };

    $scope.username = $routeParams.username;
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);
})();