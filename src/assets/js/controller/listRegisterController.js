app.controller('listRegisterController', function($scope, $http) {

    // Defino alguns valores iniciais padrão
    $scope.reg = {
        name: undefined,
        email: undefined,
        state: undefined
    };
    $scope.editReg = {
        name: undefined,
        email: undefined,
        state: undefined
    };

    $scope.listContact =  [
        {name: undefined, email: undefined, state: undefined},
    ];


    $scope.editIndexReg = undefined;
    $scope.sortByfield = 'name';
    
    $scope.listState = undefined;

    $scope.actionPanel = 'init';


    // Configurações da Aplicação
    $scope.appTitle = 'AngularJs - Avaliação';
    // Array com a lista de estados
    $http.get('data/states.json').success(function(data) {
        $scope.listState = data.listStates;
    });

   
    // Funções da aplicação

    var _reset = function() {
        jQuery('.all_fields').val(null);
        $scope.reg = {
            name: undefined,
            email: undefined,
            state: undefined
        };
        $scope.editReg = {
            index_reg: undefined,
            name: undefined,
            email: undefined,
            state: undefined
        };
        $scope.editIndexReg = undefined;
        $scope.actionPanel = 'init';
    }


    $scope.loadRegisterDemo = function() {
        $http.get('data/register.json').success(function(data) {
            $scope.listContact = data.listContact;
        });
    }

    $scope.returnPanel = function() {
        _reset();
    }

    $scope.showAddRegister = function() {
        $scope.actionPanel = 'create';
        $scope.alertApp = undefined;
    }

    $scope.addRegister = function(reg) {

    
    if($scope.listContact[0].name == undefined){
        $scope.listContact[0].name = reg.name;
        $scope.listContact[0].email = reg.email;
        $scope.listContact[0].state = reg.state;

    }else{
        $scope.listContact.push(angular.copy(reg));
    }
        
        
        $scope.alertApp = '<div id="alert-app" class="col-md-12"> <div class="alert alert-success alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>UFA! conseguimos</strong> Registro adcionado com sucesso. </div></div>'

        _reset();
    }

    $scope.editRegister = function(index_reg) {
        $scope.editIndexReg = index_reg;
        $scope.editReg = {
            name: $scope.listContact[index_reg].name,
            email: $scope.listContact[index_reg].email,
            state: $scope.listContact[index_reg].state
        };
        $scope.actionPanel = 'edit';
        $scope.alertApp = undefined;
    }

    $scope.alterRegister = function(data_reg, index_reg) {
        $scope.listContact[index_reg] = {
            name: data_reg.name,
            email: data_reg.email,
            state: data_reg.state
        };
        _reset();
        $scope.alertApp = '<div id="alert-app" class="col-md-12"> <div class="alert alert-success alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>UFA! conseguimos</strong> o registro foi alterado com sucesso. </div></div>'


    }

    $scope.deleteRegister = function(trash_contact) {
        $scope.deleteItem = trash_contact.$$hashKey;
        $scope.delRegName = trash_contact.name;
        $scope.alertApp = undefined;
        $('#modalDeleteReg').modal('show');

    }

    $scope.confirmDeleteRegister = function(hashKey) {
        angular.forEach($scope.listContact, function(register_in_list, index_register) {
            if (register_in_list.$$hashKey === hashKey) {
                $scope.listContact.splice(index_register, 1);
                return;
            };
        });
        $('#modalDeleteReg').modal('hide');
        $scope.alertApp = '<div id="alert-app" class="col-md-12"> <div class="alert alert-success alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <strong>UFA! conseguimos</strong> o registro foi excluido com sucesso. </div></div>'
        _reset();
    }

    $scope.orderNow = function(field) {
        $scope.sortByfield = field;
        $scope.orderDirection = !$scope.orderDirection;
        $scope.alertApp = undefined;

    }

});