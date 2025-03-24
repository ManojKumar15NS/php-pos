<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "pos";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

$category = isset($_GET['category']) ? $_GET['category'] : '';

if ($category) {
    $stmt = $conn->prepare("SELECT * FROM stock WHERE category_name = ?");
    $stmt->bind_param("s", $category);
} else {
    $stmt = $conn->prepare("SELECT * FROM stock");
}

$stmt->execute();
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
    echo "<div class='item-card' data-name='" . htmlspecialchars($row["item_name"]) . "' data-price='" . $row["price"] . "'>
            <img src='" . htmlspecialchars($row["image_path"]) . "' alt='" . htmlspecialchars($row["item_name"]) . "'>
            <p>" . htmlspecialchars($row["item_name"]) . "<br>₹" . $row["price"] . "</p>
          </div>";
}

$stmt->close();
$conn->close();
?>

