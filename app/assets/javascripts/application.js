
function go(url){
    window.location.href = url;
};

function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0; i < vars.length; i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){
                   return pair[1];
               }
       } return(false);
};

$(document).ready(function(){
    $('.accordion-header').click(function () {
        var parent = $(this).parent();

        if (parent.hasClass('open')) {
            parent.removeClass('open');
            parent.find('.accordion-content').slideUp(200);
        } else {
            parent.addClass('open');
            parent.find('.accordion-content').slideDown(200);
        }
    });
});