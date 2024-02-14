<?php
$hostname = "localhost";
$username = "root";
$password = "";
$database = "food_park";

$con = mysqli_connect($hostname,$username,$password)
or die ("<html><script language = 'JavaScript'>alert ('Sem conexão com o BD')
</script></html>");

//verificar erro de conexão

if(!$con){ 
    echo "Connection falied: ". mysqli_connect_error();

}


?>