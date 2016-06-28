/**
 * Created by aroja on 23/06/2016.
 */
angular.module('project', [])

    .controller('ngController', ['$scope','$http',function($scope,$http) {

        $scope.tab = 1;

        $scope.setTab = function (tabId) {
            this.tab = tabId;
        };

        $scope.isSet = function (tabId) {
            return this.tab === tabId;
        };


        $http.get('http://transcordero.com/test/get_trabajos.php')
            .success(function(data) {
                $scope.trabajos = "";

                $scope.trabajos = data;
            });

        contacts.getTodos = function() {
            $http.get('http://transcordero.com/test/get_clientes.php')
                .success(function(data) {
                    $scope.clientes = "";
                    $scope.clientes = data;
                });
        }


        facturas.getTodos = function() {
            $http.get('http://transcordero.com/test/get_facturas.php')
                .success(function(data) {
                    $scope.facturas = "";
                    $scope.facturas.todos = data;
                });
        }

        contacts.remaining = function() {
            var count = 0;
            angular.forEach(contacts.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

    }]);
