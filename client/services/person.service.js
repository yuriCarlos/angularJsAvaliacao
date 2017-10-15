//service criado para simular um CRUD
angular.module('app').service('personService', [
	function(){
		items = [
			{name:'Devit Bremer', state:'PR', email:'Bremer@foobar', id:0},
			{name:'Milena Chagas', state:'CE', email:'Chagas@foobar', id:1},
			{name:'João Pedro', state:'PI', email:'Joao@gmail.com', id:2},
			{name:'Alexandra Bonifacio', state:'SP', email:'alexandra@hotmail.com', id:3}
		]
		id = items.length

		this.storeItem = storeItem
		this.getList = getList
		this.getById = getById
		this.removeById = removeById
		this.filter = filter

		function storeItem(item){
			//se o item tem um id procura pelo item e o remove
			if(item.id != null)
				removeById(item.id)
			//senao cria um novo id
			else
				item.id = id++

			item = angular.copy(item)
			items.push(item)
		}

		function getList(){
			return items
		}

		function filter(str){
			if(str === "") return items

			str = str.toLowerCase()
			return items.filter((item)=>{
				return 	item.name.toLowerCase().includes(str) || 
						item.email.toLowerCase().includes(str) || 
						item.state.toLowerCase().includes(str)
			})
		}

		function getById(idx){
			for(var i = 0; i < items.length; i++)
				if(items[i].id == idx)
					return items[i]	
		}

		function removeById(idx){
			for(var i = 0; i < items.length; i++)
				if(items[i].id == idx)
					items.splice(i, 1)
		}


	}
]);