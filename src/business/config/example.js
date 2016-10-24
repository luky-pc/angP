/**
 * Created by payne.zhang on 10/9/16.
 */
define(["angular", "require", "angular-route"], function (angular, require) {
    var app = angular.module('example');
    app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.register = {
            //得到$controllerProvider的引用
            controller: $controllerProvider.register,
            //同样的，这里也可以保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $compileProvider.register,
            service: $provide.service
        };
    }]);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/content',{
                    templateUrl: 'src/business/views/content.html',
                    controller: 'content',
                    resolve: {
                        /*
                         这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                         对应controller写法（注意keyName）：
                         controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                         function($scope, $http, keyName) {
                         }]);
                         */
                        loadCtrl: ['$q', function ($q) {
                            var deferred = $q.defer();
                            require(['src/business/services/common.js','src/business/controllers/content'], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                });
        $routeProvider.otherwise({redirectTo: '/content'});
        // $stateProvider.state(
        //     "content",
        //     {
        //         url: '/content',
        //         templateUrl: 'src/business/views/content.html',
        //         controller: 'content',
        //         resolve: {
        //             /*
        //              这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
        //              对应controller写法（注意keyName）：
        //              controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
        //              function($scope, $http, keyName) {
        //              }]);
        //              */
        //             loadCtrl: ['$q', function ($q) {
        //                 var deferred = $q.defer();
        //                 require(['src/business/controllers/content'], function (controller) {
        //                     //$controllerProvider.register('content', ['$scope', controller]);      //由于是动态加载的controller，所以要先注册，再使用
        //                     deferred.resolve();
        //                 });
        //                 return deferred.promise;
        //             }]
        //         }
        //     }
        // )
    }]);
    return app;
});
