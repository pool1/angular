var myapp = angular.module('myApp', []);

myapp.controller('myController', ['$scope','callService', function($scope,callService){

	$scope.onclick = function(){
		callService.getname(function(r){
			$scope.datas = r;

		});
	}
	
}]);

myapp.factory('callService', ['$http','$log', function($http,$log){
var fact = {};
fact.getname = function(cb){


	 $http({
        method : "GET",
        url : "http://jsonplaceholder.typicode.com/comments"
    }).then(function mySucces(response) {
    	cb(response.data);
     
    }, function myError(response) {
        
    });
};

return fact;
	
}]);

myApp.directive('myInfo',  function(){
	// Runs during compile
	return {
		template:"<strong>dfgdfg</strong>"
	};
});