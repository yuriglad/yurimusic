$().ready(function(){
    $.getJSON( "https://raw.githubusercontent.com/yuriglad/yurimusic/master/data.json", function( data ) {
    console.log(data);
    $("#block-text").html(data["text"]);
  });
});
