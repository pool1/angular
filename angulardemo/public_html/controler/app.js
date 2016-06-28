/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var angu = angular.module('myApp', [
  'ui.router'
]);
  angu.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "view/login.html"
      })
      .state('siginup', {
        url: "/siginup",
        templateUrl: "view/siginup.html"
      })
      .state('welcome', {
        url: "/welcome",
        templateUrl: "view/welcome.html"
     
      });
      
      $urlRouterProvider.otherwise("/login");
  });
 angu.controller('mycont', ['$scope','$state', function($scope,$state) {
      $scope.gotoSignup = function(){
          $state.go("siginup");  
      };
  $scope.onclick = function(){
      	
     //  var myObj = JSON.parse(window.localStorage.get("saved"));
           // alert(myObj.length);
       if(window.localStorage.hasOwnProperty("user")){
                
                 var user = JSON.parse(localStorage.getItem('user'));
                    if(user.username === $scope.username && user.password ===$scope.password ){
                        alert("success");
                         $state.go("welcome"); 
                         

                       }else{
                           alert("yousername or password incorrect");
                       }

                
               
       }else{
              $state.go("siginup");  
       }

    
  };
}]);
angu.controller('sg', ['$scope','$state', function($scope,$state) {
     $scope.onclick = function(){
         var myobct =  new Object();
         myobct.username = $scope.username;
         myobct.password = $scope.password;
         myobct.email = $scope.email;
        
         localStorage.setItem('user', JSON.stringify(myobct));
         $state.go("login"); 
        
        
           

         
     };    
        
}]);
 
angu.controller('appController',['$scope','$http',function($scope,$http){
        $http.get("appjson/components.json")
               .then(function(response) {
        $scope.myWelcome = response.data;
               });
               $scope.ondrage = function(evt){
                 // alert( evt.target.innerText);
                  
                     var x = document.createElement('INPUT');
                     x.setAttribute("type", evt.target.innerText);
                     var myEl = angular.element( document.querySelector('#mydiv'));
                     myEl[0].appendChild(x);
                     x.addEventListener("dragstart", myFunction(event));
                   
                      
                 
               };
               function myFunction(event){
               
                   //event.dataTransfer.setData("Text", event.target.id);
               }
                
         

             
}]);
