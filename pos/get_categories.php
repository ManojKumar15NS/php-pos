<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "pos";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

$sql = "SELECT DISTINCT category_name FROM stock";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo "<div class='category'>" . htmlspecialchars($row["category_name"]) . "</div>";
}

$conn->close();
?>
