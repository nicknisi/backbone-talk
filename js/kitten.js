(function ($, window, undefined) {
	window.Kitten = Backbone.Model.extend({
		defaults : {
			phrase : "i iz in your presentation",
			imgUrl : "cat10.jpg"
		},
		initialize : function () {
			console.log("Kitten initialized");
		},
		saySomething : function (something) {
			something  = something || "nutin";
			alert("kitteh sez: " + something);
		}
	});
	
	window.SadCat = Kitten.extend({
		defaults : {
			phrase : "i iz a sad kiteh bcuz barcamp iz almos ovrr",
			imgUrl : "sad.jpg"
		}
	});
	
	window.KittenView = Backbone.View.extend({
		initialize : function () {
			_.bindAll(this, 'render');
			this.model.bind('change', this.render);
			this.template = _.template($('#kitten-view').html());
		},
		render : function () {
			var renderedContent = this.template(this.model.toJSON());
			$(this.el).html(renderedContent);
			return this;
		}
	});
	
	window.KittenRouter = Backbone.Router.extend({
		routes : {
			"" : "home",
			"/sad" : "sad",
			"/dancing/cat" : "dance"
		},
		home : function  () {
			$('#container').append("<h1>Hello World</h1>");
		},
		sad : function () {
			var sadCat = new Kitten({
				phrase : "",
				imgUrl : "sad.jpg"
			});
			var view = new KittenView({
				model : sadCat
			});
			$('#container').html('').append(view.render().el);
		},
		dance : function () {
			var dancingCat = new Kitten({
				phrase : "",
				imgUrl : "dancing.jpg"
			});
			var view = new KittenView({
				model : dancingCat
			});
			$('#container').html('').append(view.render().el);
		}
	});
	$(function () {
		window.app = new KittenRouter();
		Backbone.history.start();
	});
})(jQuery, window);