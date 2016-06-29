var myApp =  angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {

		$routeProvider

			// route for the home page
			.when('/main', {

				templateUrl : 'view/main.html',
			
			});
			 
	
});