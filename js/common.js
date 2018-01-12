$(function () {
$(".fixed_bar .top").on("click",function () {
    $("html ,body").animate({
        scrollTop:0
    },800)
})
});