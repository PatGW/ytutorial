// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $(".edit_tutorial").on("click", "a[data-kind='remove-step']", function(e){
    $(this).parents("div[data-kind='step']").fadeOut('fast', function(){ $(this).remove(); });
    return false;
  });
  
  $("a[data-kind='new-step']").on("click", function(e){
    e.preventDefault();
    var new_step = $("div[data-kind='new-step'] > div[data-kind='step']").first().clone();
    console.log(new_step);
    new_step.html(new_step.html().replace(/new-step-id/g, get_timestamp()));
    new_step.hide();
    $(this).before(new_step);
    new_step.slideDown('fast');
    return false;
  });
});