'use strict'

describe('boards-controller',function(){
	beforeEach(module('noterious'));

	var BoardsCtrl;
  	var state;
  	var scope;

  	var newBoard = {
  		title: "this is a title",
  		description: "ldkfjlakfjdlkafjlkafjsklj",
  		isPublic: false
  	}

  	var invalidBoard = {
  		description: "ldkfjlakfjdlkafjlkafjsklj",
  		isPublic: false
  	}

  	var updatedBoard = {
  		title: "this board has been updated",
  		description: "ldkfjlakfjdlkafjlkafjsklj",
  		isPublic: false
  	}
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

  	describe('.createBoard',function(){
  		
  		it('creates a new board with the correct index',function(){
  			BoardsCtrl.createBoard(newBoard,true);
  			expect(BoardsCtrl.boards[4]).toEqual(newBoard);
  		});

  		it('doesnt create an invalid board',function(){
  			BoardsCtrl.createBoard(invalidBoard,false);
  			expect(BoardsCtrl.boards[4]).toBeUndefined()
  		});

  	});

  	describe('.updateBoard',function(){
  		
  		it('updates the correct board',function(){
  			BoardsCtrl.updateBoard(3,updatedBoard,true);
  			expect(BoardsCtrl.boards[3]).toEqual(updatedBoard);
  		});

  		it('doesnt update an invalid board',function(){
  			var originalBoard = BoardsCtrl.boards[3]
  			BoardsCtrl.updateBoard(3,updatedBoard,false);
  			expect(BoardsCtrl.boards[3]).toEqual(originalBoard);
  		});
  	});



});