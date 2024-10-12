<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="phpstyles.css">
</head>
<body>
    
</body>
</html>



<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "registrations";
// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
}

// Variables from form submission or any other source
if(isset($_POST['submit']))
{
$username = $_POST['username'];
$email = $_POST['email'];
$pwd = $_POST['pwd'];
$num = $_POST['num'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$education = $_POST['education'];
$interest = $_POST['interest'];

// SQL query to insert data into the register table
$sql = "INSERT INTO register (username, email, pwd, num, dob, gender, education, interest) 
        VALUES ('$username', '$email', '$pwd', '$num', '$dob', '$gender', '$education', '$interest')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " .$sql ."<br>" .$conn->error;
}

// Close connection
$conn->close();
}
?>
