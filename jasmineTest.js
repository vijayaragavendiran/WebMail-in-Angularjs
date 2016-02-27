describe(‘Office Mail Test’, function() {

	beforeEach(module('app'));

		var OfficeMailController,
			scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		OfficeMailController = $controller('officeMailController', {
			$scope: scope
			});
	}));
	it('check count!', function () {
		expect(scope.name).not.toBe(null);
	});

});
