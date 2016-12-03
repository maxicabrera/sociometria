/*global jQuery*/
(function ($, window) {

    "use strict";

    // custom namespace
    var template = template || {};

    // global variables
    var windowSmall   =  $(window).width() < 768,
    	windowMed	  =  $(window).width() >= 768 && $(window).width() < 1025,
    	windowLarge	  =  $(window).width() >= 1025;

    var contactInput = $('input');


    template.global = {
    	init: function() {
  			$(document).foundation();
            this.inputTransition();
            this.isReveal();
    	},
    	
        inputFocus: function () {
                contactInput.on('keypress', function(event) {
                    if ($(this).val().length > 0) {
                        contactInput.removeClass('error');
                        $('label').removeClass('active');
                        $(this).siblings('label').addClass('active');
                    }else{
                        $('label').removeClass('active');
                    }
                });
        },

        inputNext: function() {
                contactInput.on('keydown', function(event) {
                    if(event.keyCode == 13) {
                        if ($(this).val().length > 0 ) {
                            $(this).parent('fieldset').removeClass('visible').next().addClass('visible');
                        }else{
                            $(this).addClass('error');
                        }
                    }
                });
        },

        inputTransition: function() {
            template.global.inputNext();
            template.global.inputFocus();
        },

        isReveal: function() {
            var sr = ScrollReveal({ reset: true });

            var configReveal = {
              delay    : 200,
              distance : '40px',
              easing   : 'ease-in-out',
              rotate   : { z: 4 },
              scale    : 1.1
            };

            sr.reveal('.init-reveal', configReveal);
        }
    }



    //initialize
    template.global.init();

    $(window).on('resize',  function(event) {
        event.preventDefault();
        windowSmall   =  $(window).width() < 768;
        windowMed     =  $(window).width() >= 768 && $(window).width() < 1025;
        windowLarge   =  $(window).width() >= 1025;
    });

}(jQuery, this));
//end scope


