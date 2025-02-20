$( document ).ready(OnDocumentStart);

function OnDocumentStart(){
    $(".profilepicture").click(borderChange);
}
function borderChange(){
    $(this).css("border-color", "red");
}
$(document).ready(function() {
    // Open the lightbox
    $(".lightbox").click(function(event) {
        event.preventDefault();
        var imageSrc = $(this).attr("href");
        $("#lightbox-img").attr("src", imageSrc);
        $("#lightbox-modal").fadeIn();
    });

    // Close the lightbox when clicking the close button
    $(".close").click(function() {
        $("#lightbox-modal").fadeOut();
    });

    // Close the lightbox when clicking outside the image
    $("#lightbox-modal").click(function(event) {
        if (event.target === this) {
            $(this).fadeOut();
        }
    });
});