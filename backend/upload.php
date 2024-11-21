<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    echo json_encode(["message" => "Connection successful"]);
} else {
    echo json_encode(["Error" => "connection no bueno"]);
}