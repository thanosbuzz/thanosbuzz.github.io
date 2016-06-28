/**
 * Created by aroja on 23/06/2016.
 */
angular.module('project', [])
    .controller('contactsController', ['$scope','$http','$timeout',function($scope,$http,$timeout) {


        $http.get('http://transcordero.com/test/get_clientes.php')
            .success(function(data) {
                $scope.clientes = "";
                $scope.contacts.todos = data;
            });

        var contacts = this;


        contacts.addTodo = function() {
            contacts.todos.push({text:contacts.todoText, done:false});
            contacts.todoText = '';
        };

        contacts.remaining = function() {
            var count = 0;
            angular.forEach(contacts.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        contacts.archive = function() {
            var oldTodos = contacts.todos;
            contacts.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) contacts.todos.push(todo);
            });

        };

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        // Simulate async data update
        $timeout(function () {
            $scope.data = [
                [28, 48, 40, 19, 86, 27, 90],
                [65, 59, 80, 81, 56, 55, 40]
            ];
        }, 3000);




    }]);
