'use strict';

angular.module('noterious')
	.factory('BoardsModel',['$q', function($q){

	    var boards = {
	        1: {
	          	description: "Anything and everything!",
	          	isPublic: true,
	          	title: "Random Ideas"
	        },
	        2: {
	          	description: "BizDev Ideas",
	          	isPublic: false,
	          	title: "Hustle"
	        },
	        3: {
	          	description: "this is a test",
	          	isPublic: false,
	          	title: "testing"
	        }
	    };

	    function getBoards(){
	  		var deferred = $q.defer();

	  		deferred.resolve(boards);
	    	
	    	return deferred.promise;
	    }

		return {
			getBoards: getBoards
		}
	}]);
