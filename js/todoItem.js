var TodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

	urlroot: 'https://jsonplaceholder.typicode.com/todos',

	validate: function(attrs){
		if(!attrs.title)
			return 'Title is required';
	},
	toggle: function(){
		if(this.get('completed'))
			this.set('completed', false);
		else
			this.set('completed', true);
		
	}
});
