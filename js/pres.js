(function ($, window, undefined) {

	var Book = Backbone.Model.extend({
		defaults : {
			title : "Awesome Backbone",
			author : "Mr. Awesome"
		},
		initialize : function () {
			console.log("hello world");
		}
	});

	var BookView = Backbone.View.extend({
		intialize : function () {
			_.bindAll(this, "render");
		},
		render : function () {}
	});

})(jQuery, window);
