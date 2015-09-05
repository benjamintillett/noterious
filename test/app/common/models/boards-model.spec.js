'use strict';

describe("Service: BoardsModel", function() {
  var BoardsModel;
  var $httpBackend; 
  var UserModelMock;
  var currentUserId = 745;
  
  beforeEach(function(){
  	module('noterious',function($provide){

  		UserModelMock = {
  			getCurrentUser: function(){
  				return 1
  			}
  		}
  		spyOn(UserModelMock,"getCurrentUser").and.returnValue(currentUserId);

  		$provide.value('UserModel',UserModelMock);
  	});	
  })



  beforeEach(inject(function(_BoardsModel_) {
    BoardsModel = _BoardsModel_;
  }));

  beforeEach(inject(function($injector){
  	$httpBackend = $injector.get('$httpBackend');
  	 $httpBackend.whenGET(/app.*/).respond(200, '');
  }));

  describe('.all',function(){
	  it('requests the current user', function() {
	    BoardsModel.all();
	    expect(UserModelMock.getCurrentUser).toHaveBeenCalled();
	  });

	 	it('correctly requests the users boards from the server', function() {
	    BoardsModel.all()
	    $httpBackend.expectGET(ENDPOINT_URI + 'users/' + currentUserId + '/boards.json').respond(200, '');
	    $httpBackend.flush();
	  });
  });

});