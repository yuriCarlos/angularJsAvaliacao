angular.module('app')
.controller('listCtrl', ['$scope', '$location', 'personService',
	function($scope, $location, personService ){
		$scope.people = personService.getList()
		$scope.textFilter = ""
		orderBy('name')

		$scope.edit = edit
		$scope.remove = remove
		$scope.orderBy = orderBy
		$scope.filter = filter
		$scope.confirmRemove = confirmRemove

		var toRemove = null

		function filter(str){
			$scope.people = personService.filter(str)
		}

		function edit(person){
			$location.path('/edit/' + person.id)
		}

		function remove(person){
			$('#confirm-delete').modal('show')
			toRemove = person
		}

		function confirmRemove(){
			personService.removeById(toRemove.id)
			$('#confirm-delete').modal('hide')
		}

		function orderBy(property){
			$scope.people.sort((a, b) =>{
				let ax = a[property].toUpperCase(), bx = b[property].toUpperCase()

				if(ax < bx) return -1
				if(ax > bx) return 1
				return 0
			})
		}

	}]);