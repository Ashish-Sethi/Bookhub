'use strict';

/**
 * @ngdoc function
 * @name bookhubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookhubApp
 */
angular.module('bookhubApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   	var url = 'https://capillary.0x10.info/api/books?type=json&query=list_books';
	$http.get(url).success(function(response){
		$scope.list = response.books;
	});
  });
