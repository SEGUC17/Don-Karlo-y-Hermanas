angular.module('myProject').
  component('companiesList', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/companies-list/companies-list.template.html',
    controller: function companiesController($http) {
      var self = this;
        this.heading = "Companies";
    // this.id = $stateParams.id;
var ay7aga ='test';
      $http.get('http://localhost:3000/companies').then(function(response) {
        console.log(response.data);
        console.log(ay7aga);
        self.companies = response.data;
      });
    }
  });



