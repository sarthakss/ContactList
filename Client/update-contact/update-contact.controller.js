(function() {
  'use strict';
  angular.module('addressbook')
    .controller('UpdateContactController', UpdateContactController);

  UpdateContactController.$inject = ['contactService','$scope', '$http', '$window', '$routeParams' ];

  function UpdateContactController( contactService,$scope, $http, $window, $routeParams) {
   console.log($routeParams.id); 
   var updateContactVm = this;
   
   contactService.getById($routeParams.id)
    .then(function (contact){
      updateContactVm.contact = contact;
    }, function (error){
      console.log(error);
    });
   
   $scope.updateContact = function(){
      $scope.form.id =  $routeParams.id;
       
       $http({
            method : "PUT",
            url : "http://localhost:8086/list/person/" + $routeParams.id,
            data : angular.toJson($scope.form),
           
            headers : {
                      'Content-Type' : 'application/json'
                      }
            }).then(successFn, errorFn );
                
   };
            function successFn(response) {
              $window.location.href = '#!/contacts';
              console.log("updated");
            }
           
            function errorFn(response) {
              console.log(response.statusText);
               console.log($scope.form);
            }
  }
  
  

})();
