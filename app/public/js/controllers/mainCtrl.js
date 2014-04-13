angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Post', '$location', function($scope, Post, $location) {

	$scope.init = function() {
		$scope.getPosts();
	}

	$scope.getPosts = function() {
		Post.get().success(function(data) {
			$scope.posts = data;
		});
	}

	$scope.remove = function() {
		var id = this.post._id;
		
		Post.delete(id).success(function() {
			$scope.getPosts();
		});
    };

    $scope.init();

}]);