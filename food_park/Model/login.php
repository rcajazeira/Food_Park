<?php
require_once 'config.php';
header('Content-type: aplication/json');


//Obter dados vindo do front-end

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$dados = [];

mysqli_select_db($con,$database);

$sql= "SELECT _user,senha  from login where  _user = '$usuario' and senha = '$senha'";




echo json_encode($dados);
$con->close();



?>