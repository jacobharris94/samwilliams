$( ".text" )
	.mouseover(function() { 
        $("#hoverImage").attr("src", $(this).attr('id') + "Image.jpg");
    })
    .mouseout(function() {
        $("#hoverImage").attr("src", "");
    });