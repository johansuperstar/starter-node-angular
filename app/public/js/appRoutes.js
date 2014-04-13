angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.
		when('/', {
			templateUrl: '/views/partials/posts.html'
		}).
		when('/create', {
			templateUrl: '/views/partials/create.html'
		}).
		when('/edit/:id', {
			templateUrl: '/views/partials/edit.html'
		});

	$locationProvider.html5Mode(true);

}]);