(function () {
  angular
    .module('app')
    .directive('taskList', taskList);

  function taskList () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: '/templates/task-list.html',
      controllerAs: '$ctrl',
      controller: ['$firebaseArray', TaskListCtrl]
    };

    function TaskListCtrl ($firebaseArray) {

      // Global Variables
      var vm = this;
      var taskRef = firebase.database().ref('tasks');
      var taskList = $firebaseArray(taskRef);


      // Init Tasks
      vm.taskList = taskList;
      vm.date = new Date();


      // Create Task
      vm.createTask = function() {
        taskList.$add({
          text: vm.taskText,
          isTaskComplete: false
        })
        .then(
          vm.taskText = '',
          vm.isCreateTaskVisible = false
        );
      };


      // Is Completed Task
      vm.isTaskComplete = function(task) {
        if(task.isTaskComplete === false) {
          task.isTaskComplete = true;
        } else {
          task.isTaskComplete = false;
        }
        taskList.$save(task);
      };


      // Is Create Task Visible
      vm.createTaskVisible = function(event) {
        event.preventDefault();
        vm.isCreateTaskVisible = !vm.isCreateTaskVisible;
      }

    }
  }
})();
