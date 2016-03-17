'use strict';

angular.module('lkApp')
    .controller('myMatchesCtrl', ['$scope', '$http', 'teamService','$templateCache',
        function ($scope, $http, teamService, $templateCache) {

            console.log($templateCache);

            $scope.getPersonSchedulePromise = teamService.getPersonSchedule($scope.person).then(function(response){
                $scope.products = response.data.products;
                $scope.teamName = response.data.teamName;
            });

            $scope.formatDate = function (date) {
                var date = date.split("-").join("/");
                var dateOut = new Date(date);
                return dateOut;
            };


        }]);