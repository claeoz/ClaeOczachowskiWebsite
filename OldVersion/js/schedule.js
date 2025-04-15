let counter = 0;
document.getElementById("queue").textContent = `The current queue is ${counter}`;

$("#request").on("submit", function (event) {
    event.preventDefault();

    $(".error").remove();

    var isValid = true;

    if ($("#firstName").val().trim() === "") {
        $("#firstName").after('<span class="error">First Name is required</span>');
        isValid = false;
    }

    if ($("#lastName").val().trim() === "") {
        $("#lastName").after('<span class="error">Last Name is required</span>');
        isValid = false;
    }

    var phoneRegex = /^[0-9]{10}$/;
    if ($("#PhoneNumber").val().trim() === "" || !phoneRegex.test($("#PhoneNumber").val())) {
        $("#PhoneNumber").after('<span class="error">Valid phone number required</span>');
        isValid = false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if ($("#Email").val().trim() === "" || !emailRegex.test($("#Email").val())) {
        $("#Email").after('<span class="error">Valid email required</span>');
        isValid = false;
    }

    if (!$("input[name='preferredContact']:checked").val()) {
        $("input[name='preferredContact']").first().closest('div').after('<span class="error">Select a contact method</span>');
        isValid = false;
    }

    if ($("#type").val() === "NA") {
        $("#type").after('<span class="error">Select an appointment type</span>');
        isValid = false;
    }

    if ($("#details").val().trim() === "") {
        $("#details").after('<span class="error">Details are required</span>');
        isValid = false;
    }

    if (isValid) {
        counter++;
    $("#queue").text(`The current queue is ${counter}`);
    
    $("input:not([type='submit'])").val("");
    $("input:radio, input:checkbox").prop("checked", false);
    $("select").prop("selectedIndex", 0);

    $("#submissionMessage").modal("show");
    }
});

// Progress Bar Logic
$(document).ready(function () {
    $('#express').on('shown.bs.modal', function () {
        fillProgressBar();
    });

    function fillProgressBar() {
        let progress = 0;
        let progressBar = $('#progressBar');
        progressBar.css('width', '0%').attr('aria-valuenow', 0);

        let interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
            } else {
                progress++;
                progressBar.css('width', progress + '%').attr('aria-valuenow', progress);
            }
        }, 50);
    }
});
