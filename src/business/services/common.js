/**
 * Created by payne.zhang on 10/10/16.
 */
define(["angular"], function (angular) {
    var app = angular.module("example");
    var common = function () {
        var number = 16;
        this.getNumber = function () {
            return number;
        };
    };
    app.register.service("common", common);
});
