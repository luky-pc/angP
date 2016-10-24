/**
 * Created by payne.zhang on 10/9/16.
 */
'use strict';
define(["angular"], function (angular) {
    var app = angular.module('example');
    var content = function ($scope, common) {
        console.log(common.getNumber());
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    };
    app.register.controller('content',['$scope','common',content]);
});
