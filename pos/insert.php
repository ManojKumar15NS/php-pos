<?php
$conn = new mysqli("localhost", "root", "", "your_database_name");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $category = $_POST["category_name"];
    $item_name = $_POST["item_name"];
    $price = $_POST["price"];
    
    $image = $_FILES["image_path"]["name"];
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($image);

    move_uploaded_file($_FILES["image_path"]["tmp_name"], $target_file);

    $sql = "INSERT INTO items (category, item_name, price, image_path) 
            VALUES ('$category', '$item_name', '$price', '$target_file')";

    if ($conn->query($sql) === TRUE) {
        echo "Item added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
