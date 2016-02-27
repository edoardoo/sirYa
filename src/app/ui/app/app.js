(function(angular) {
	'use strict';
	var hereAppId = "liAZSQ5xRMA53r02qXJL";
	var hereAppcode = "ws_4Eaq5WZxH4irVuIKDIQ";

	/**
	 * ui app module.
	 */
	angular.module('sirya.ui.app', [
			'sirya.ui.app.home',
			'sirya.ui.app.profile',
			'sirya.ui.app.contacts',
			'sirya.ui.app.searches',
			'sirya.ui.app.chat',

		])
		.controller('AppCtrl', function($scope, Auth, $state, rest, hereRest) {
			// if (!Auth.isConnected()) return $state.go('authentication.login');
			var self = this;
			// self.user = sirya.ui.common.services.api.returnUser();

			// console.debug( "MapManager",  MapManager );

		}).controller('SidebarCtrl' ,function( rest ){
			var self = this;
			self.user = rest.getUserWithId(69);

		});
})(window.angular);
