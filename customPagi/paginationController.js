var PaginationController = (function() {
    'use strict';
    function PaginationController($scope) {
        $scope.$on("setPagination", function (event, args) {
            
            $scope.paginationCurrentPage = 0;
            $scope.paginationDefaultPageSize = 10;
            $scope.paginationPageSize = 5;
            $scope.paginationPageToBeDisplayed = 5;
            $scope.hidePageCount = 0;
            $scope.numberOfPages = function() {                
                var totalNumberPages = Math.ceil($scope.paginationData.length/$scope.paginationPageSize);                
                $scope.paginationPageArray = [];            
                for(var i = 0; i < totalNumberPages; i++) {
                    $scope.paginationPageArray.push(i);
                }
            }();
            
            // next, previous and current page click along with logic of showing/hiding page number accordingly
            $scope.nextPage = function() {
                if($scope.paginationCurrentPage >= $scope.paginationPageToBeDisplayed) {
                    $scope.hidePageCount = $scope.hidePageCount + 1;
                }

                return $scope.paginationCurrentPage = $scope.paginationCurrentPage + 1;
            };

            $scope.currPage = function(pageNumber) {
                var page = $scope.paginationCurrentPage = pageNumber;
                if($scope.paginationCurrentPage <= $scope.paginationPageToBeDisplayed) {
                    $scope.hidePageCount = 0;
                } else if($scope.paginationCurrentPage >= $scope.paginationPageToBeDisplayed) {
                    $scope.hidePageCount = $scope.paginationCurrentPage - $scope.paginationPageToBeDisplayed;
                }

                return page;
            };

            $scope.prevPage = function() {
                if($scope.paginationCurrentPage >= $scope.paginationPageToBeDisplayed) {
                    $scope.hidePageCount = $scope.hidePageCount - 1;
                } else if($scope.paginationCurrentPage <= $scope.paginationPageToBeDisplayed) {
                    $scope.hidePageCount = 0;
                }

                return $scope.paginationCurrentPage = $scope.paginationCurrentPage - 1;                
            };            
            
            // show and hide page number
            $scope.showPages = function(pageNumber) {
                if((pageNumber < $scope.paginationPageToBeDisplayed)
                    || (pageNumber <= $scope.paginationCurrentPage)) {
                    return true;
                }
            };

            $scope.hidePages = function(pageNumber) {
                if($scope.paginationCurrentPage >= $scope.paginationPageToBeDisplayed
                    && pageNumber  <= $scope.hidePageCount) {
                    return false;
                }
                return true;
            };

            // more and less pages icons
            $scope.morePagesIcon = function() {
                if($scope.paginationPageArray.length == $scope.paginationCurrentPage + 1) { return false; }
                else if($scope.paginationData.length > ($scope.paginationPageToBeDisplayed * $scope.paginationPageSize)) { return true; }
            };            
            $scope.lessPagesIcon = function() {
                if($scope.paginationPageToBeDisplayed < $scope.paginationCurrentPage + 1) { return true; }
            };            
        });        
    }
    return PaginationController;
}());

artlApp.controller('PaginationController', [ '$scope', PaginationController]);
artlApp.filter('startFrom', function() {
    return function(input, start) {
        if(input !== undefined) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
});
artlApp.filter('activePage', function(){
  return function(v, yes, no) {
      return v ? yes : no;
  };
});