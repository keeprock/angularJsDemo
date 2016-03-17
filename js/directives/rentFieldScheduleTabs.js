angular.module('lkApp')
.directive('rentfieldscheduletabs', function(){
   return {
       templateUrl: '/templates/rentFieldSchedule_tabs.html',
       controller: 'rentFieldTabsCtrl',
       replace: true
   }
});