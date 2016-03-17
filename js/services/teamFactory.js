'use strict';

angular.module('lkApp')
    .factory('teamService', ['$http','SERVERS', function ($http, SERVERS) {
        return {
            // Сохраняем команду
            saveTeam: function (data) {
                return $http.post(SERVERS.CRM + '/apicrm/rent-field/create-team', data);
            },
            updateTeam: function(data) {
                return $http.post(SERVERS.CRM + '/apicrm/rent-field/update-team', data);
            },
            // Делаем запрос на поиск человека с определенным номером телефона
            getPlayerInfo: function (phone) {
                return $http.post(SERVERS.CRM + '/apicrm/rent-field/find-person', phone);
            },
            deleteMember: function (id) {
                return $http.post(SERVERS.CRM + '/apicrm/rent-field/delete-member', id);
            },
            // Получаем ID текущего залогиненного в системе пользователя
            getCurrentPersonId: function () {
                return $http.get(SERVERS.LK + '/user/get-person-id');
            },
            // Получаем текущую команду капитана, если он капитаном является
            getCurrentTeam: function(captain_id) {
                return $http.get(SERVERS.CRM + '/apicrm/rent-field/get-captain-team', {
                    params: {
                        'captain_id': captain_id
                    }
                });
            },
            // Получаем всех членов выбранной команды
            getTeamMembers: function(teamId) {
                return $http.post(SERVERS.CRM + '/apicrm/team/team-members', teamId);
            },
            getPersonSchedule: function(person_id) {
                return $http.get(SERVERS.CRM + '/apicrm/rent-field/get-person-schedule', {
                    params: {
                        'person_id' : person_id
                    }
                });
            }
        }
    }]);