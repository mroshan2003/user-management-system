$(document).ready(function() {
    let username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'login.html';
    } else {
        $('#username').text(username);
    }

    // Load Profile Data
    $.ajax({
        url: 'php/profile.php',
        type: 'GET',
        data: { username: username },
        success: function(data) {
            let profile = JSON.parse(data);
            $('#age').val(profile.age);
            $('#dob').val(profile.dob);
            $('#contact').val(profile.contact);
        }
    });

    // Update Profile Data
    $('#profileForm').on('submit', function(e) {
        e.preventDefault();

        let age = $('#age').val();
        let dob = $('#dob').val();
        let contact = $('#contact').val();

        $.ajax({
            url: 'php/profile.php',
            type: 'POST',
            data: {
                username: username,
                age: age,
                dob: dob,
                contact: contact
            },
            success: function(response) {
                alert(response);
            }
        });
    });

    // Logout
    $('#logout').on('click', function() {
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });
});
