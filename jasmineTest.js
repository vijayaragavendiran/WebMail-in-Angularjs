///<reference path="app.js" />
///<reference path="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js" />
///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />
///<reference path="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" />
///<reference path="https://cdnjs.cloudflare.com/ajax/libs/ag-grid/3.3.3/ag-grid.min.js" />
///<reference path="" />
///<reference path="" />

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
