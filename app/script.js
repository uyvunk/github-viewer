(function(){

  var app = angular.module("githubViewer", []);

  var MainController = function($scope, github, $location, $anchorScroll) {
    $scope.pageTitle = "Github Profile Viewer";
    $scope.filterType = "+name";

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos(data)
            .then(onRepos, onError);
    }

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

    var onRepos = function(data) {
      $scope.repos = data;
      $location.hash("userName");
      $anchorScroll();
    };

    $scope.search = function(username) {
      if (username) {
        github.getUser(username)
              .then(onUserComplete, onError);
      }
    };
  };

  //declare a module
  var app = angular.module("githubViewer", []);

  // configure the module
  app.controller("MainController", MainController);
})();


