/**
 * Builds select dropdown with correponding URLs
 * @access public
 * @author fedmich@gmail.com
 * v0.1 9:26 PM 6/7/2012
 */

(function($){
    $.fn.select_urls = function(options, callback) {
		$(this).change(function(){
			if(! callback){
				console.log('no callback suppied, 2nd parameter');
				return false;
			}
			
			var apair = options[ this.value ];
			var url = apair[1] ? apair[1] : '';
			if(! url){
				console.log('URL is blank');
			}
			
			callback( url );
		});
		
		var obj_select = this;
		$(options).each(function(i,o){
			var text = this[0];
			obj_select.append(
				$('<option value="'+i+'">' + text + '</option>' ) );
		});
		return this;
	}
	
})(jQuery);