'use strict';

angular.module('lkApp')
    .controller('modalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', 'schedule', 'teamService', 'rentFieldScheduleService', '$state', '$rootScope', function ($scope, $http, $uibModalInstance, schedule, teamService, rentFieldScheduleService, $state, $rootScope) {
        $scope.schedule = schedule;

        $scope.loaded = false;
        $scope.teamAdded = false;

        $scope.currentPrice = parseInt($scope.schedule.field_price);

        $scope.fieldOrdered = 1;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };



        $scope.$on('teamName', function (evt, message) {
            $scope.teamName = message;
            $scope.teamAdded = true;
        });

        $scope.$on('fieldOrdered', function (evt, message) {
            //$scope.schedule.field_price = parseInt(basePrice) * message;
            $scope.currentPrice = parseInt($scope.schedule.field_price) * message;
            $scope.fieldOrdered = message;
            $scope.dirty = true;
        });

        $scope.getPersonIdPromise = teamService.getCurrentPersonId().then(function (response) {

            $scope.personId = response.data;

            $scope.orderRent = function () {

                var products = [
                    {
                        'customerId': $scope.personId,
                        'quantity': $scope.fieldOrdered,
                        'productSpecs': {
                            'field_size': $scope.fieldOrdered * 25,
                            'schedule_id': $scope.schedule.id,
                            'price': $scope.schedule.field_price,
                            'team_id': $scope.teamId
                        }
                    }
                ];
                $scope.orderPromise = rentFieldScheduleService.order(products).then(function (response) {
                    $rootScope.$broadcast('orderPlaced', true);
                    $state.go('^');
                    $uibModalInstance.close();
                });

            };

            $scope.getCurrentTeamPromise = teamService.getCurrentTeam($scope.personId).then(function (response) {
                if (response.data) {
                    $scope.teamName = response.data.name;
                    $scope.teamId = response.data.id;
                    $scope.teamAdded = true;
                } else {
                    $scope.teamAdded = false;
                }
                $scope.loaded = true;
            });
        });


    }]);