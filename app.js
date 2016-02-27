agGrid.initialiseAgGridWithAngular1(angular);

var app = angular.module('app',["agGrid"]);
app.controller('officeMailController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){


$scope.name = 'r';

$scope.loadSentItems = function(){

	

}

$scope.loadInbox = function(){

	var columnDefs = [
        {headerName: "Date", field: "date",width: 100},
        {headerName: "Subject", field: "subject",width: 650},
        {headerName: "From", field: "from",width: 250}
    ];

    var rowData = [
        {date: "02/25/2016", subject: "welcome to adidas || Upto 50 percent off", from: 'Adidas', to:'Vijay'},
        {date: "02/5/2016", subject: "Your application for Sr. Software Engineer (Javascript)  - Highlights for Children  has been viewed", from: 'LinkedIn',to:'Vijay'},
        {date: "01/15/2016", subject: "Get inspired! Whimsical decor & traditional furniture transforms you home.", from: 'Walmart',to:'Vijay'},
        {date: "02/1/2016", subject: "welcome to adidas || Upto 50 percent off", from: 'Adidas',to:'Vijay'},
        {date: "02/5/2016", subject: "Vinodh has endorsed you!", from: 'LinkedIn',to:'Vijay'},
        {date: "01/1/2016", subject: "Recharge with MobiKwik and get a chance to win a smart watch, smart phone & smart headphones!", from: 'Walmart',to:'Vijay'},
        {date: "02/22/2016", subject: "welcome to adidas || Upto 50 percent off", from: 'Adidas',to:'Vijay'},
        {date: "02/3/2016", subject: "Your application for Sr. Software Engineer (Javascript)  - Highlights for Children  has been viewed", from: 'LinkedIn',to:'Vijay'},
        {date: "01/12/2016", subject: "Get inspired! Whimsical decor & traditional furniture transforms you home.", from: 'Walmart',to:'Vijay'},
        {date: "01/1/2016", subject: "Recharge with MobiKwik and get a chance to win a smart watch, smart phone & smart headphones!", from: 'Walmart',to:'Vijay'},
        {date: "02/22/2016", subject: "welcome to adidas || Upto 50 percent off", from: 'Adidas',to:'Vijay'},
        {date: "01/1/2016", subject: "Recharge with MobiKwik and get a chance to win a smart watch, smart phone & smart headphones!", from: 'Walmart',to:'Vijay'},
        {date: "02/22/2016", subject: "welcome to adidas || Upto 50 percent off", from: 'Adidas',to:'Vijay'}
    ];
	$scope.inboxCount = rowData.length;
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowSelection: 'single',
        rowData: rowData,
        onSelectionChanged: onSelectionChanged

    };

}
$scope.loadInbox();

function onSelectionChanged() {
    var selectedRows = $scope.gridOptions.api.getSelectedRows();
    var selectedRowsString = '';

    selectedRows.forEach( function(selectedRow, index) {
        $scope.sub = selectedRow.subject;
        $scope.to = selectedRow.to;
        $scope.from = selectedRow.from;
        $scope.mDate = selectedRow.date;
        $scope.content = selectedRow.subject;


    });
   
}


}])