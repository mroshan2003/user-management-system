$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();

        $.ajax({
            url: 'php/login.php',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if (response === "Login successful") {
                    localStorage.setItem('username', username);
                    window.location.href = 'profile.html';
                } else {
                    alert(response);
                }
            }
        });
    });
});
