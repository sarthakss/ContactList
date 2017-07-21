(function() {
  'use strict';
  angular.module('addressbook')
    .controller('AddContactController', AddContactController);

  AddContactController.$inject = ['$scope', '$http', '$window'];

  function AddContactController( $scope, $http, $window) {
    
   $scope.addContact = function(){
     console.log($scope.form.email);
    $http({
            method : "POST",
            url : "http://localhost:8086/list/person/",
            data : angular.toJson($scope.form),
            headers : {
                      'Content-Type' : 'application/json'
                      }
            }).then(successFn, errorFn );
                
   };
            function successFn(response) {
              $window.location.href = '#!/contacts'
            }
           
            function errorFn(response) {
              console.log(response.statusText);
               console.log($scope.form)
            }
  }
  
  

})();
