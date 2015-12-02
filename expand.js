/*
  Version: 1.0
  Developer: Jonathan Chute
  Year: 2015
*/

(function( $ ) {
    $.fn.expand = function(options) {
		
        var settings = $.extend( {
            'end':   ''
        }, options);
        
        var mainObj = $(this);
            if(mainObj[0] === undefined)
                return;
        var wrapper = mainObj.parent();
        
        $(window).on("load resize", function(){
            setHeight();
        });
        
        function setHeight() {
            var height = $(window).height();

            height -= subtract('html', true);
            height -= subtract('body', true);
            height -= subtract(wrapper, true);
            height -= subtract(mainObj, false);
            
            $(wrapper).children().not(mainObj).each(function(){
                height -= $(this).outerHeight(true);
                console.log($(this));
                console.log(height);
                if(settings.end != '') if($(this).is(settings.end)) return false;
            });
            
            $(mainObj).css('min-height', height);
        }
        
        function subtract(object, padding) {
            var total = 0;
            
            total += parseInt($(object).css('marginTop'));
            total += parseInt($(object).css('marginBottom'));
            
            if(padding) {
                total += parseInt($(object).css('paddingTop'));
                total += parseInt($(object).css('paddingBottom'));
            }
            
            return total;
        }
        
    };
})( jQuery );
