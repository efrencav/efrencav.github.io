/*------------------------------------------------------------------
    ADD YOUR CUSTOM JS HERE
-------------------------------------------------------------------*/
var today = new Date();
var hourNow = today.getHours();
var greeting = document.getElementById("greeting");

if (hourNow > 18) {
    greeting = 'Good evening! ';
} else if (hourNow > 12) {
    greeting = 'Good afternoon! ';
} else if (hourNow > 0) {
    greeting = 'Good morning! ';
} else {
    greeting = 'Hola! ';
}

console.log(greeting);
// document.write(greeting);

// console.log(greeting);

/*==============================================================
     counter
     ==============================================================*/
    //  $(function ($) {
    //     animatecounters();
    // });
    // function animatecounters() {
    //     $('.timer').each(count);
    //     function count(options) {
    //         var $this = $(this);
    //         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    //         $this.countTo(options);
    //     }
    // }