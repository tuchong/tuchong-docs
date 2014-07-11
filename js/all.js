(function(window, $){
	var NAME = function(){
		this.defaultIndex = 'index.md';
		
		this.parser = {};
		this.parser['md'] = this.parser['markdown'] = function(rsp){
			this.html(marked(rsp, true));
			document.title = this.find('h1').text();
			
			return this;
		};
		
		this.parser['txt'] = $.fn.text;
		
		this.parser['html'] = $.fn.html;
	};
	
	NAME.prototype.navigate = function(pathname){
		var self = this;
		$.ajax({
			url  : pathname + (pathname.charAt(pathname.length - 1) === '/' ? this.defaultIndex : ''),
		    type: 'GET',
			complete: function(){},
			success: function(rsp, result, xhr){
				var main = $('main');
				
				var matches = pathname.match(/\.([a-z0-9]+)$/i);
				
				var parser = matches && self.parser[matches[1]] ? self.parser[matches[1]] : self.parser['html'];
				
				parser.call(main, rsp);
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
		
		var loadHash = function(e){
			if (window.location.hash === ''){
				instance.navigate('index.md');
				return false;
			}
			
			var matches = window.location.hash.match(/^#!(.+)/i);
			if (matches){
				instance.navigate(matches[1]);
				return false;
			}
		};
		
		if (window.location.pathname){
			
		}
		else{
			
		}
		
		$(window).on('hashchange', loadHash);
		
		loadHash();
		
		
		$('.markdown-partial').each(function(){
			var el = $(this);
			$.ajax({
				url  : '/' + $(el).attr('id') +'.md',//,
			    type: 'GET',
				complete: function(){},
				success: function(rsp, result, xhr){
					instance.parser['md'].call(el, rsp);
				}
			});
		});
	});

})(window, jQuery);
