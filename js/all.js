(function(window, $){
	var NAME = function(){
		
	};
	
	NAME.prototype.navigate = function(pathname){
		$.ajax({
			url  : pathname + (pathname.charAt(pathname.length - 1) === '/' ? 'index.md' : '.md'),
		    type: 'GET',
			complete: function(){},
			success: function(rsp, result, xhr){
				var main = $('main');
				main.html(marked(rsp, true));
				
				document.title = main.find('h1').text();
			},
			error : function(){
				var main = $('main');
				main.html('<h1>404 Not Found</h1>');
			}
		});
	};
	
	window.NAME = NAME;

	var instance = new NAME(); 

	$(function(){
		
		$(document.body).delegate('a', 'click', function(e){
			instance.navigate(this.href);
			
			window.history.pushState({url : this.href}, document.title, this.href);
			
			return false;
		});
		
		$(window).on('popstate', function(e){
			instance.navigate(e.originalEvent.state.url);
			
			return false;
		});
		
		if (window.location.pathname){
			
		}
		else{
			
		}
		
		instance.navigate(window.location.href);
		
		$('.markdown-partial').each(function(){
			var el = $(this);
			$.ajax({
				url  : '/' + $(el).attr('id') +'.md',//,
			    type: 'GET',
				complete: function(){},
				success: function(rsp, result, xhr){
					el.html(marked(rsp, true));
				}
			});
		});
	});

})(window, jQuery);
