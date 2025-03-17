
$(document).ready(function(){

    $('div.backdrop').click(function () {
        $("div.hamburger").toggleClass('change');
        $('header > div.mainmenu').toggleClass('togglemainmenu');
        $('div.backdrop').toggleClass('hidden');
    });

    $("header > div.mainmenu > ul > li").click(function(e){
        $("header div.mainmenu > ul > li > ul")
        .toggleClass("hidden");
        setTimeout(function(){$("header div.mainmenu > ul > li > ul")
        .toggleClass('displaySubMenu');},0);
        e.stopPropagation();
    });

    $('div.hamburger').click(function () {
        setTimeout(function(){$("div.hamburger").toggleClass('change');}, 0)
        $('header > div.mainmenu').toggleClass('togglemainmenu');
        $('div.backdrop').toggleClass('hidden');
    });

    $('header > div.mainmenu>ul>li >ul >li.submenubackbtn').click(function (e) {
        $("header div.mainmenu > ul").toggleClass('togglemainmenu');
        setTimeout(function(){$("header div.mainmenu > ul > li > ul")
        .toggleClass('displaySubMenu');},0);
        setTimeout(function(){$("header div.mainmenu > ul > li > ul")
        .toggleClass("hidden");},500)
        e.stopPropagation();
    });
    
});


