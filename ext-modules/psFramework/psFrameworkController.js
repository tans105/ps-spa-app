'use strict';

angular.module('psFramework').controller('psFrameworkController',
    ['$scope', '$window', '$timeout', '$rootScope',
        function ($scope, $window, $timeout, $rootScope) {

            $scope.isMenuButtonVisible = true;

            $($window).on('resize.psFramework', function () {
                $scope.$apply(function () {
                    checkWidth();
                    broadcastMenuState();
                })
            });

            var checkWidth = function () {
                var width = Math.max($($window).width(), $window.innerWidth);
                $scope.isMenuVisible = (width > 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            $timeout(function () {
                checkWidth();
            }, 0);

            $scope.$on('ps-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
                checkWidth();
                broadcastMenuState();
            });

            $scope.menuButtonClicked = function () {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
            }

            var broadcastMenuState = function () {
                $rootScope.$broadcast('ps-menu-show', {
                    show: $scope.isMenuVisible
                });
            }
        }
    ]);


