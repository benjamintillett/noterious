'use strict'

describe('boards-controller',function(){
	beforeEach(module('noterious'));

	var BoardsCtrl;
  	var state;
  	var scope;

	beforeEach(inject(function ($controller, $state, $rootScope) {
	

	    state = $state;
	    scope = $rootScope.$new();

	    BoardsCtrl = $controller('BoardsCtrl', {
	      $state: state
	    });

	}));

	it('set the state',function(){
		expect(state.href('boards')).toEqual('#/boards');
	});

	it('should be defined', function () {
    	expect(BoardsCtrl).toBeDefined();
  	});

  	it('has a dummy name', function () {
    	expect(BoardsCtrl.title).toEqual("This is a dummy name");
  	});
});