
// Append tabs content element's id with "Tab"
// Necessary for Foundaiton 3 syntax and thus IE8 functionality

$('.tabs-content .content').each(function(){
    var id = $(this).attr('id');
    id = id + 'Tab';
    $(this).attr('id', id);
});
