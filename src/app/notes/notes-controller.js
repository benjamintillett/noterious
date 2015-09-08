angular.module('noterious')
  .controller('NotesCtrl', function (currentUser, NotesModel,$stateParams) {
  	var ctrl = this;
  	
 	ctrl.userUid = currentUser.uid;
  ctrl.boardId = $stateParams.boardId;

  	ctrl.getNotes = function () {
      NotesModel.all()
        .then(function (result) {
          ctrl.notes = (result !== 'null') ? result : {};
        }, function () {
          ctrl.resetForm();
        });
    };


  });