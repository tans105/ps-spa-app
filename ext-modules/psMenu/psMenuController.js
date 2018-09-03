'use strict';

angular.module('psMenu').controller('psMenuController',
    ['$scope', '$rootScope', function ($scope, $rootScope) {
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };

        this.setActiveRoute = function (route) {
            $rootScope.$broadcast('ps-menu-item-selected-event', {route: route});
        };

        this.getActiveElement = function () {
            return $scope.activeElement;
        }
    }
    ]);