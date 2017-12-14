(function () {
  var app = angular.module("githubViewer");

  var RepoController = function ($scope, github, $routeParams, $location) {
    var onError = function (reason) {
      $scope.error = "Could not fetch the data";
    };

    var onContributors = function (data) {
      $scope.contributors = data;
    };

    var searchUser = function (username) {
      $location.path("/user/" + username);
    }

    $scope.filterType = "+login";
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    $scope.searchUser = searchUser;
    github.getContributors($scope.username, $scope.reponame)
      .then(onContributors, onError);
  };

  app.controller("RepoController", RepoController);
})();