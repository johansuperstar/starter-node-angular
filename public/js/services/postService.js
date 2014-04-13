angular.module('postService', []).factory('Post', ['$http', function($http) {

	return {
		
		get : function() {
			return $http.get('/api/posts');
		},

		getById : function(id) {
			return $http.get('/api/posts/' + id);
		},

		create : function(postData) {
			return $http.post('/api/posts', postData);
		},

		delete : function(id) {
			return $http.delete('/api/posts/' + id);
		},

		update : function(postData) {
			return $http.put('/api/posts', postData);
		}
	}
	
}]);