(function() {
  'use strict';
  angular.module('addressbook', ['ngRoute']);


  angular.module('addressbook')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/contacts', {
        templateUrl: 'contact-list/contact-list.tmpl.html',
        controller: 'ContactListController',
        controllerAs: 'contactListVm'
      })
      .when('/contacts/:id', {
        templateUrl: 'contact-detail/contact-detail.tmpl.html',
        controller: 'ContactDetailController',
        controllerAs: 'contactDetailVm'
      })
      .when('/add-contact', {
        templateUrl: 'add-contact/add-contact.tmpl.html',
        controller: 'AddContactController',
        controllerAs: 'addContactVm'
      })
      .when('/contacts/updatecontact/:id', {
        templateUrl: 'update-contact/update-contact.tmpl.html',
        controller: 'UpdateContactController',
        controllerAs:'updateContactVm'
      })
      .when('/home', {
        templateUrl: 'homepage.tmpl.html',
        controller: '',
        controllerAs: ''
      })
      .when('/aboutus', {
        templateUrl: 'aboutus.tmpl.html',
        controller: '',
        controllerAs: ''
      })
      .otherwise({
        redirectTo: '/contacts'
      });
  }
})();