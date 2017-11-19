(function(){
  var MainController = function($scope, $http) {
    $scope.pageTitle = "Github Profile Viewer";
    $scope.filterType = "+name";

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
           .then(onRepos, onError);
    }

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
    };

    $scope.search = function(username) {
      if (username) {
        $http.get("https://api.github.com/users/" + username)
          .then(onUserComplete, onError);
      }
    };
  };

  //declare a module
  var app = angular.module("githubViewer", []);

  // configure the module
  app.controller("MainController", MainController);
})();


