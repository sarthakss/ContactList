// Code goes here

(function() {
  'use strict';
  angular.module('addressbook')
    .service('contactService', contactService);

  contactService.$inject = ['$q', '$http'];

  function contactService($q, $http) {
    var self = this;

    self.get = getContacts;
    self.getById = getContactById;
   // self.delete = removeContactById;
    // self.post = addContact;
    // self.put = updateContact;

    function getContacts() {
      return $http.get('http://localhost:8086/list/person/')
        .then(successFn, errorFn);
    }

    function getContactById(id) {
      return $http.get('http://localhost:8086/list/person/' + id)
        .then(successFn, errorFn);
    }
    
    
    // function addContact() {
    // return $http.post('')
    //     .then(successFn, errorFn);
    // }
    
    // function updateContact(id) {
    // return $http.put('' + id)
    //     .then(successFn, errorFn);
    // }
    
      function successFn(response) {
      return response.data;
    }

    function errorFn(error) {
      return $q.reject(error);
    }
  }
})();
