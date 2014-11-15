$(function(){
    $(".photo").click(openLightbox);
    $(".overlay").click(closeLightbox);
    $(".overlay img").click(stay);
});

function openLightbox(){
    $(".overlay").fadeIn();
    var src = $(this).find("img").attr("src");
    $(".overlay img").attr("src", src);
}

function closeLightbox(){
    $(this).fadeOut();
}

function stay(){
    return false;
}