<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$uploadDir = 'uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true); 
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['image']['tmp_name']; 
        $fileName = basename($_FILES['image']['name']); 
        $uploadFilePath = $uploadDir . $fileName; 


        if (move_uploaded_file($fileTmpPath, $uploadFilePath)) {
            echo json_encode(["message" => "File uploaded successfully", "path" => $uploadFilePath]);
        } else {
            echo json_encode(["error" => "File upload failed"]);
        }
    } else {
        echo json_encode(["error" => "No file uploaded or upload error"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}