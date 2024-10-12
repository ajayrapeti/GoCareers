<?php
$servername = "localhost";
$email = "root";
$password = "";
$database = "registrations";
// Create connection
$conn = new mysqli($servername, $email, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
}

// Login form submission
if(isset($_POST['submit'])) {
    // Get email and password from the form
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    // SQL injection prevention
    $email = stripslashes($email);
    $pwd = stripslashes($pwd);
    $email = mysqli_real_escape_string($conn, $email);
    $pwd = mysqli_real_escape_string($conn, $pwd);

    // Query to check if the email and password match
    $query = "SELECT * FROM register WHERE email='$email' AND pwd='$pwd'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    // If result matched $email and $password, $count must be 1
    if ($count == 1) {
        // Redirect to success page or perform other actions
        require("success.html");
    } else {
        require("failed.html");
    }
}
// Close connection
$conn->close();
?>