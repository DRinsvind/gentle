$().ready(function() {

    setTimeout(function () {
        $('.header-top').addClass('active');
    },500);
    setTimeout(function () {
        $('.solution-list').addClass('active');
    },500);
    setTimeout(function () {
        $('.solutions-list__title').addClass('active');
    },500);
    setTimeout(function () {
        $('.main-block').addClass('active');
    },500);
    setTimeout(function () {
        $('.page-title').addClass('active');
    },500);
    setTimeout(function () {
        $('.solutions-list__logo').addClass('active');
    },500);
    $('.solution-list__item').click(function(){
        $('.solution-list__item').removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('id');
        $('.solution-content__item').removeClass('active');
        $('.solution-content__item-'+id).addClass('active');
    });
    var urlSplit = window.location.hash;
    $('.solution-list__item').each(function () {
        console.log($(this).data('name'));
        console.log($(this).data('name'));
        if('#'+$(this).data('name')===urlSplit){
            $(this).click();
        }
    })
    $('.modal-button').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.white-filter').addClass('active');
        $('.modal-block').addClass('active');
    })
    $('.close-but').click(function(e){
        $('.white-filter').removeClass('active');
        $('.modal-block').removeClass('active');
    })
});