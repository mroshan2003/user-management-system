$(document).ready(function() {
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();

        $.ajax({
            url: 'php/register.php',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                alert(response);
                if (response === "Registration successful") {
                    window.location.href = 'login.html';
                }
            }
        });
    });
});
