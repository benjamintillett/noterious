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
    BoardsModel.getBoards().then(function(boards){
    	ctrl.boards = boards;
    }).catch(function(error){
    	console.log(error);
    }).finally(function(){
    	console.log("we have the boards");
    });

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
        // CREATE BOARD
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

  });
