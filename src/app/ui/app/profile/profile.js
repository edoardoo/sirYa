(function(angular) {
	'use strict';

	/**
	 * ui app module.
	 */
	angular.module('sirya.ui.app.profile', [])
	.controller('ProfileCtrl', function($scope, rest, MapManager) {
		var self = this;
        
        self.user = rest.getUserWithId( 69 );
        self.initMap = function( ){

        	MapManager.loadMaps( $(".map") );

        }

        
	});
})(window.angular);
