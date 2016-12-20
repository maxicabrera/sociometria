/*global jQuery*/
(function ($, window) {

    "use strict";

    // custom namespace
    var wobiz = wobiz || {};

    // global variables
    var windowSmall   =  $(window).width() < 768,
    	windowMed	  =  $(window).width() >= 768 && $(window).width() < 1024,
    	windowLarge	  =  $(window).width() >= 1024;


    wobiz.global = {
    	init: function(){
            this.equalHeight();
    	},

        equalHeight: function () {

              var maxHeight = -1;

                  $('.product').each(function() {
                    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
                  });

                  $('.product').each(function() {
                    $(this).height(maxHeight);
                  });
        
        }
    }

    //initialize
    wobiz.global.init();

    $(window).on('resize',  function(event) {
        event.preventDefault();
        windowSmall   =  $(window).width() < 768;
        windowMed     =  $(window).width() >= 768 && $(window).width() < 1024;
        windowLarge   =  $(window).width() >= 1024;
    });

}(jQuery, this));
//end scope.