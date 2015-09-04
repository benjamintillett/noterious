'use strict';

angular.module('noterious')
  .controller('BoardsCtrl',function(UserModel,BoardsModel) {
    var ctrl = this;

    console.log(UserModel.getCurrentUser());

    ctrl.loading = false;

    ctrl.newBoard = {
      title: '',
      description: '',
      isPublic: false
    };

    ctrl.getBoards = function(){
	    BoardsModel.all().then(function(boards){
	    	ctrl.boards = boards
	    });
	}
    
    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newBoard = {
        title: '',
        description: '',
        isPublic: false
      };
    };


    ctrl.createBoard = function (board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        BoardsModel.create(board).then(function(response){
        	ctrl.getBoards();
        });

        ctrl.resetForm();
      }
    };

    ctrl.updateBoard = function (boardId, board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        // UPDATE BOARD
        ctrl.cancelEditing();
      }
    };

    ctrl.deleteBoard = function (boardId) {
      ctrl.loading = true;
      // DELETE BOARD
      ctrl.cancelEditing();
    };

    ctrl.setEditedBoard = function (boardId, board) {
      ctrl.editedBoardId = boardId;
      ctrl.editedBoard = angular.copy(board);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentBoard = function (boardId) {
      return ctrl.editedBoard !== null && ctrl.editedBoardId === boardId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedBoardId = null;
      ctrl.editedBoard = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoards();
  });
