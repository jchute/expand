/*
  Expand - Short Page Fix
  Version: 1.2
  Developer: Jonathan Chute
  Year: 2016
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

        setHeight();

        $(window).on("load resize", function(){
            setHeight();
        });

        function setHeight() {
            var height = $(window).height();

            height -= subtract('html', true);
            height -= subtract('body', true);
            height -= (!compare($('body'), wrapper)) ? subtract(wrapper, true) : 0;
            height -= subtract(mainObj, false);

            $(wrapper).children().not(mainObj).each(function(){
                if($(this).css('position') == 'absolute') return true;
                height -= $(this).outerHeight(true);
                if(settings.end != '') if($(this).is(settings.end)) return false;
            });

            $(mainObj).css('min-height', height);
        }

        function subtract(object, padding) {
            var total = 0;

            total += parseInt($(object).css('marginTop'));
            total += parseInt($(object).css('marginBottom'));
            total += parseInt($(object).css('borderTopWidth'));
            total += parseInt($(object).css('borderBottomWidth'));

            if(padding) {
                total += parseInt($(object).css('paddingTop'));
                total += parseInt($(object).css('paddingBottom'));
            }

            return total;
        }
        
        function compare(object1, object2) {
            if(object1.length !== object2.length) return false;
            for(var i = 0; i < object1.length; i++ ) {
                if(object1[i] !== object2[i]) return false;
            }
            return true;
        }

    };
})( jQuery );
