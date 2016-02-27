(function (angular, _) { 'use strict';

	var hereAppId = "liAZSQ5xRMA53r02qXJL";
	var hereAppcode = "ws_4Eaq5WZxH4irVuIKDIQ";

    /**
     * Rest service.
     */
    angular.module('sirya.core.endpoints.hereRest', [])
    .service('hereRest', function($rootScope){
        
    	var self = this;
    	self.testScope = function(){
    		return hereAppcode;
    	}
    });

})(window.angular, window._);