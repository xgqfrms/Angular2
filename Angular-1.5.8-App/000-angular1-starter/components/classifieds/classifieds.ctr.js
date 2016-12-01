(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .controller('classifiedsController', function($scope, $mdToast, $mdSidenav, $mdDialog, $state, $stateParams, classifiedsFactory) {

      var vm = this;

      vm.openSidebar = openSidebar;
      vm.editClassified = editClassified;
      vm.deleteClassified = deleteClassified;
      vm.showSearchBar = false;
      vm.showFilters = false;

      classifiedsFactory.getClassifieds().then(function(data) {
        vm.classifieds = data.data;
        vm.categories = getCategories(vm.classifieds);
      });

      $scope.$on('newClassified', function(event, data) {
        data.id = vm.classifieds.length + 1;
        vm.classifieds.push(data);
        showToast('Classified Saved');
      });

      $scope.$on('editSaved', function(event, message) {
        showToast(message);
      });

      vm.sidebarTitle;

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }

      function openSidebar() {
        vm.sidebarTitle = 'Add a Classified';
        $state.go('classifieds.new');
      }

      function editClassified(classified) {
        vm.editing = true;
        vm.sidebarTitle = 'Edit Classified';
        vm.classified = classified;
        $state.go('classifieds.edit', { id: classified.id, classified: classified });
      }

      function deleteClassified(event, classified) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete ' + classified.title + '?')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {
          console.log(event);
          var index = vm.classifieds.indexOf(classified);
          vm.classifieds.splice(index, 1);
          showToast('Classified Deleted');
        }, function() {
          vm.status = classified.title + ' is still here.';
        });
      }

      function getCategories(classifieds) {

        var categories = [];

        angular.forEach(classifieds, function(ad) {
          angular.forEach(ad.categories, function(category) {
            categories.push(category);
          });
        });

        return _.uniq(categories);
      }

    });

})();