'use strict';

angular.module('karmaGeneratorApp')
  .controller('MainCtrl', function ($scope, $log) {
  	$scope.url='';

  	$scope.go = function() {
  		$scope.iframe = $scope.url;
  	};
  });
