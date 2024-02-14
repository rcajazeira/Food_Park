$(document).ready(function(){
    $('#login').click(function(){
        var usuario = $("#usuario").val();
        var senha = $("#senha").val();
        console.log("ok")
        $.ajax({
            url:"../Model/login.php",
            dataType: "json",
            method: "post",
            data:{
                usuario: usuario,
                senha: senha,
               

            },
            success: function (response){
                if(response.status != "Falha no cadastro"){
                    alert("Cadastrado com sucesso");
                }
            },
            error: function(xhr, status, error){
                alert(xhr.responseText);
            }
        })


    });
});

