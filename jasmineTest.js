
describe('officeMailController',function(){
 	var scope = null;
    var controller= null;
	 beforeEach(function()
    {
        module('app');
        module('agGrid');
    });

	beforeEach(inject(function($rootScope, $controller){
		 scope = $rootScope.$new();
            controller = $controller('officeMailController', {
                '$scope': scope
            });
	}));

	describe('$scope.inboxCount', function() {
		it('it checks the rowdata equals to 13',function(){
			scope.loadInbox();
			expect(scope.inboxCount).toBe(13);
		});
	});

	describe('$scope.gridoptions', function() {

		it('it checks the gridoptions not undefined',function(){
			scope.loadInbox();
			expect(scope.gridOptions).not.toBe(undefined);
		});
	});
	
});
