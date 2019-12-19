$().ready(function(){
    $.getJSON( "data.json", function( data ) {
    console.log(data);
    $("#block-text").html(data["text"]);
  });
});
