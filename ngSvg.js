'use strict';

angular.module('ngSvg', [])

    .directive('usesvg', [function(){
        return {
            restrict : 'E',
            replace: true,
            controller : ['$scope',  function($scope){

            }],
            scope: {
                useid:'@'
            },
            template: '<svg><use xlink:href=""/> </svg>',
            link:function(scope, svg, attrs){

                svg.attr('viewBox', document.getElementById(attrs.useid).getAttribute('viewBox'));
                svg.children().attr('xlink:href', '#' + attrs.useid);
            }
        };
    }])