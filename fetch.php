<?php
$proxy_url = $_GET['url'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $proxy_url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
$content = curl_exec($ch);
curl_close($ch);
header('Content-Type: image/jpeg');
echo $content;
?>