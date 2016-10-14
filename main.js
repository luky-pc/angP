require.config({
    //配置angular的路径
    baseUrl: ".",
    paths: {
        "angular": "lib/angular/angular.min",
        "angular-route": "lib/angular/angular-route.min",
        "app": "src/business/app",
        "config": "src/business/config",
        "controllers": "src/business/controllers",
        "services": "src/business/services",
        "views": "src/business/views"
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            exports: "angular-route"
        }
    }
});
require(["app", "angular", "config/example"], function (app, angular) {
    angular.bootstrap(document, ["example"]);
    //console.log("it works");
});
