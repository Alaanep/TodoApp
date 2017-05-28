var TodoItemView = Backbone.View.extend({
	//TodoItem view has depenci on view model.
	//If no model is passed to this view,
	//this method is going to throw a error at runtime 
	tagName: "li",

	initialize: function(options){
		if(!(options && options.model)){
			throw new Error('model is not specified');
		}
		this.model.on('change', this.render, this);
	},

	events: {
		'click #toggle': "onClickToggle",
		'click #delete': "onClickDelete"
	},

	onClickDelete: function(){
		this.model.destroy();
	},

	onClickToggle: function(){
		this.model.toggle();
		this.model.save();
	},

	render: function(){
		this.$el.attr('id', this.model.id);
		this.$el.toggleClass('completed', this.model.get('completed'));
		var template=$("#todoItemTemplate").html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html);

		/*
		var checked=this.model.get('completed')? 'checked' : "";
		this.$el.html("<input id='toggle' type='checkbox'"+ checked +"></input>" + this.model.escape('title') + "<button id='delete'>Delete </button>");
		*/
		return this; 
	}
});