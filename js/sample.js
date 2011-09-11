var MyModel = Backbone.Model.extend({
	defaults : {
		foo : 'bar',
		baz : 'camp'
	},
	initialize : function () {}
	someFunc : function () {},
	someOtherFunc : function () {}
});

var m = new MyModel({
	foo : 'camp',
	hello : 'world'
});

m.get('foo'); // camp
m.get('hello'); // world
m.someFunc();


var MyRouter = Backbone.Router.extend({
	routes : {
		'' : 'index',
		'/foo' : 'foo'
	},
	initialize : function () {
		// called when router initialized
	},
	index : function () {
		// do stuff and render view
	},
	foo : function () {
		// do stuff and render view
	}
});

var app = new MyRouter();
Backbone.history.start();