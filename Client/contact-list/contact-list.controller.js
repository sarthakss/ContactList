(function() {
  'use strict';
  angular.module('addressbook')
    .controller('ContactListController', ContactListController);

 ContactListController.$inject = ['contactService'];

  function ContactListController(contactService) {
    var contactListVm = this;

    contactService.get()
    .then(function(contacts){
      contactListVm.contacts = contacts;
    }, function (error){
      console.log(error);
    });
  }

})();