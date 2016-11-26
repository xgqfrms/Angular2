(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .controller('editClassifiedsController', function($state, $scope, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {

      var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.saveEdit = saveEdit;

      vm.sidebarTitle = 'Edit Classifed';

      vm.classified = $state.params.classified;

      $timeout(function() {
        $mdSidenav('left').open();    
      });

      $scope.$watch('sidenavOpen', function(sidenavOpen) {
        if(sidenavOpen === false) {
          $mdSidenav('left')
            .close()
            .then(function() {
              $state.go('classifieds');
          });
        }
      });

      // Case 1 - close the sidenav and change state manually
      // function closeSidebar = function() {
      //   vm.classified = {};
      //   $mdSidenav('left')
      //     .close()
      //     .then(function() {
      //       $state.go('classifieds');
      //   });      
      // }

      // Case 2 - simply use the watcher to move state
      function closeSidebar() {
        vm.classified = {};
        $scope.sidenavOpen = false;        
      }

      function saveEdit() {
        // Need to clear the form after, or else it will be populated when we go to add new classifieds
        $scope.sidenavOpen = false;
        // showToast('Edit Saved');
        $scope.$emit('editSaved', 'Edit Saved');
      }


    });

})();