angular.module('app')
.controller('newCtrl', [
	'notifyService', '$scope', '$location', 'personService', '$routeParams', 'stateService',
	function (notifyService, $scope, $location, personService, $routeParams, stateService) {

		$scope.selectedStateLabel = "Selecione um estado"
		//verifica se a tela esta editando ou criando um novo item
		if($routeParams.id != null){
			$scope.operationName = 'Editar Pessoa'
			$scope.model = personService.getById($routeParams.id)
			$scope.selectedStateLabel = $scope.model.state
		}else{
			$scope.operationName = 'Incluir Pessoa'
			$scope.model = {}
		}
		//inicia os estados
		$scope.states = stateService.get()

		$scope.save = () => {
			if(validate($scope.model)){
				personService.storeItem($scope.model)
				$location.path('#')
			}
		}

		$scope.selectState = (state) => {
			$scope.selectedStateLabel = $scope.model.state = state.acronym
		}

		
		function validate(model){
			if(!model.name){
				notifyService.notify('danger', '', 'Preencha o campo nome')
				return false
			}

			if(!model.state){
				notifyService.notify('danger', '', 'Preencha o campo estado')
				return false
			}

			if(!model.email){
				notifyService.notify('danger', '', 'Preencha um email válido')
				return false
			}

			return true
		}
	}
]);