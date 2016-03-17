'use strict';

angular.module('lkApp')
    .controller('rentFieldTabsCtrl', function ($scope, moment) {

        var startOfWeek = moment().startOf('week');
        var endOfWeek = moment().endOf('week').subtract(1, 'd');

        var today = moment();

        var days = [];
        var day = startOfWeek;
        var currentDayIndex = 0;
        var currentDayItem;

        while (day <= endOfWeek) {
            days.push(day.toDate());

            if (today.isSame(day,'day')) {
                currentDayItem = parseInt(currentDayIndex);
            }

            day = day.clone().add(1, 'd');
            currentDayIndex++;

        }

        $scope.dates = days;

        $scope.currentDay = moment();

        $scope.toggleObject = {
            item: currentDayItem
        }

    });