$(document).ready(function () {
    // Open the dropdown on click
    $('#personalProjectsDropdown').on('click', function (event) {
        $(this).next('.dropdown-menu').toggle(); // Toggle dropdown visibility
    });

    // Optional: Close the dropdown if clicked outside
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});