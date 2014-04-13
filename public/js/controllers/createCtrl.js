angular.module('CreateCtrl', []).controller('CreateController', ['$scope', 'Post', '$location', function($scope, Post, $location) {

	$scope.create = function(data) {
		Post.create(data).success(function() {
			$location.path("/");
		});
    };

}]);