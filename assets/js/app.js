//var id = 0;

$(document).ready(() => {

});

$("#save").click(function() {

    
    var nombre = $("#contactName").val();
    $("#contactName").val ('');
    var numero = $("#contactNumber").val();
    $("#contactNumber").val ('');

    $("#contactos").append('<div class="col-lg-6">' + 
        '<button id="delete" type="button" class="btn btn-danger pull-right">' + 
        '<span class="glyphicon glyphicon-trash" aria-hidden="true">' + 
        '</span>'+ '</button>' +
        '<div class="panel panel-default">' +
        '<div class="panel-body">' + '<h2>' + nombre + '</h2>' 
        + '<hr>' + '<p>' + numero + '</p>' + '</div>' + '</div>' + '</div>');
   
 });


$(document).on('click','#delete', function(){
    $(this).parent().remove();
});


    //Este es el ID de este pin en particular
    /* var pinId = "#pin_" + idPin;
    $("#pin_" + idPin).mouseover(() => {
        $(pinId + " > .front").fadeTo(1000, 0, () => {
            $(pinId + " > .front").hide();
            $(pinId + " > .rear").fadeTo(1000, 1);
        });
    });*/

    //id++;
