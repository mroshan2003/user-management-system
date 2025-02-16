<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $username = $_GET['username'];

    $stmt = $pdo->prepare("SELECT username, age, dob, contact FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $profile = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($profile);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];

    $stmt = $pdo->prepare("UPDATE users SET age = ?, dob = ?, contact = ? WHERE username = ?");
    $stmt->execute([$age, $dob, $contact, $username]);

    echo "Profile updated successfully";
}
?>
