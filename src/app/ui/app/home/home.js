(function(angular) {
	'use strict';

	/**
	 * ui app module.
	 */
	angular.module('sirya.ui.app.home', [])
	.controller('HomeCtrl', function($scope, MapManager) {

		var self = this;

		self.createOtherMap = function(){
			console.log(1);
			MapManager.createMap( 1 );
		}		
		self.createOtherMap2 = function(){
			console.log(2);
			MapManager.createMap( 2 );
		}
	});
})(window.angular);
