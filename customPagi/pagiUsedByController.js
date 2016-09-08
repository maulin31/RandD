var usedByController = (function() {
    'use strict';
   function usedByController($scope, usedByDetails) {
        var onComplete = function(data) {
            // ============== Using Actual JSON data ================= //
            var usedByData = data;
            $scope.usedByReviews = usedByDetails.getusedByReviewDetails().then(function(reviewsData) {
                return reviewsData;
            }, onError);

            $scope.paginationData = $scope.usedByReviews;                        
            // $scope.paginationData = [];
            if($scope.paginationData.length) {
                $scope.$root.$broadcast("setPagination");
            }
        };

        var onError = function(response) {
            console.log('Error');
            console.log(response);
        };
        usedByDetails.getusedByDetails().then(onComplete, onError);
    }
    return usedByController;
}());
