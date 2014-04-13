angular.module('DropdownCtrl', []).controller('DropdownController', ['$scope', function($scope) {
	
	$scope.showDropdown = false;
	$scope.dropDownId;

	$scope.onKeyDown = function($event) {
		// $scope.onKeyPressResult = getKeyboardEventResult($event, "Key press");
		// console.log($event.keyCode);

		if ($event.keyCode === 27)
			$scope.showDropdown = false;
	};
	
	$scope.toggleDropdown = function($event) {
		console.log('toggleDropdown');
		console.log($event);
		$scope.x = $event.x;
		$scope.y = $event.y;
		// $scope.dropDownId = this.post._id;
		$scope.showDropdown = !$scope.showDropdown;
	}
}]);