/*
  Expand - Short Page Fix
  Version: 1.4
  Developer: Jonathan Chute
  Year: 2018
*/
(function( $ ) {
    $.fn.expand = function(options) {

        var settings = $.extend( {
            'sections': 'div',
            'last':   '',
            'wrapper': 'body',
            'after': false,
        }, options );

        var mainObj = $(this);

        if ( mainObj[0] === undefined ) {
            return;
        }

        settings.sections = $(settings.wrapper).children( settings.sections );
            

        setHeight(); setInterval( setHeight, 400 );

        function setHeight() {

            var height = $(window).height();

            height -= subtract( 'html', true );
            height -= subtract( 'body', true );
            height -= ( ! compare( $('body'), $(settings.wrapper) ) ) ? subtract( $(settings.wrapper), true ) : 0;
            height -= subtract( mainObj, false );

            settings.sections.not( mainObj ).each( function() {

                var position = $(this).css( 'position' );

                if ( position == 'absolute' || position == 'fixed' ) {

                    return true;

                }

                height -= $(this).outerHeight( true );

                if ( settings.last != '' ) {

                    if ( $(this).is( settings.last ) ) {

                        return false;

                    }

                }

            } );

            $(mainObj).css( 'min-height', height );

            if ( settings.after != false ) {

                settings.after();

            }
        }

        function subtract( object, padding ) {

            var total = 0;

            total += parseInt( $(object).css( 'margin-top' ) );
            total += parseInt( $(object).css( 'margin-bottom' ) );
            total += parseInt( $(object).css( 'border-top-width' ) );
            total += parseInt( $(object).css( 'border-bottom-width' ) );

            if ( padding ) {

                total += parseInt($(object).css('padding-top'));
                total += parseInt($(object).css('padding-bottom'));

            }

            return total;

        }
        
        function compare( object1, object2 ) {

            if ( object1.length !== object2.length ) {

                return false;

            }

            for ( var i = 0; i < object1.length; i++ ) {

                if ( object1[i] !== object2[i] ) {
                    return false;
                }

            }

            return true;

        }

    };
})( jQuery );
