angular.module('EditCtrl', []).controller('EditController', 
	['$scope', 'Post', '$location', '$routeParams', function($scope, Post, $location, $routeParams) {
	
	$scope.init = function() {
		$scope.getPostToEdit($routeParams.id);
	}

	$scope.getPostToEdit = function(id) {
		Post.getById(id).success(function(data) {
			$scope.post = data;
		});
	}

    $scope.update = function(data) { 
    	Post.update(data).success(function() {
    		$location.path("/");	
    	});
    }

    $scope.init();

}]);