(function() {
  'use strict';
  angular.module('addressbook')
    .controller('ContactDetailController', ContactDetailController);

  ContactDetailController.$inject = ['contactService', '$routeParams','$scope', '$http', '$window'];

  function ContactDetailController(contactService, $routeParams, $scope, $http, $window) {
    var contactDetailVm = this;
    
    contactService.getById($routeParams.id)
    .then(function (contact){
      contactDetailVm.contact = contact;
    }, function (error){
      console.log(error);
    });
    
    $scope.removeContact = function(contact) {
      
                    $http({
                      method : "DELETE",
                      url : "http://localhost:8086/list/person/" + $routeParams.id
                      }).then(successFn, errorFn );
    }
    
                 function successFn(response) {
                      $window.location.href = '#!/contacts'
                }
         
                function errorFn(response) {
                    console.log(response.statusText);
                }
  }
  
  

})();

