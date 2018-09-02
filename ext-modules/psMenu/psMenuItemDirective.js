'use strict';

angular.module('psMenu').directive('psMenuItem',function(){
    return{
        require: '^psMenu',
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function(scope,el, attr, ctrl){
            el.on('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){//calling $apply to manually trigger the digest cycle since it is a jquery event
                    ctrl.setActiveElement(el);
                    ctrl.setActiveRoute(scope.route);
                })
            })
        },
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        }
    }
});