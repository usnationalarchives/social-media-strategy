$( document ).ready(function() {

  $(".panel-title a").each(function( index ) {
      if($(this).hasClass('in')){
        append( $( "<span>",{class:'glyphicon glyphicon-minus'} ) );
      }
      else{
        append( $( "<span>",{class:'glyphicon glyphicon-plus'} ) );
      }
  });

   $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
  });
});

