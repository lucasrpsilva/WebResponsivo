$(document).ready(function(){
    $("#formulario").hide();
    $("#convites").hide();
    $("#salvar2").hide();
    $("#deletar").hide();
    var key = 1;
    
    $("#membro").click(function(){
        $("#formulario").show();
        $("#lista").hide();
        $("#membro").hide();
        $("#org").hide();
        $("#cancelar").show();
        $("#convites").hide();
        $("#salvar").show();
        $("#salvar2").hide();
        $("#deletar").hide();
    });
    
    $("#cancelar").click(function(){
        $("#salvar2").hide;
        $("#deletar").hide();
        $("#formulario").hide();
        $("#lista").show();
        $("#membro").show();
        if($(".listaMembros").length){
            $("#convites").show();
            $("#org").hide();
        }else{
            $("#org").show();
            $("#convites").hide();   
        }
    });
    
    $("#salvar").click(function(){
        $("#form").off().submit(function(){
            event.preventDefault();
            var nome = $("#nome").val();
            var email = $("#email").val();
            var dep = $("#dep").val();
            var acesso = $("#acesso").val();
            $("#lista").append("<button class=" + "listaMembros " + "id=" + key + ">" + acesso + ": " + nome + " - " + email + " - " + dep + "</button>");
            $("#lista").show();
            $("#salvar").hide();
            $("#salvar2").hide();
            $("#deletar").hide();
            $("#cancelar").hide();
            $("#membro").show();
            $("#formulario").hide();
            $("#convites").show();
            $("#nome").val("");
            $("#email").val("");
            $("#dep").val("");
            $("#acesso").val("Usuário");
            key++;
        });
    });
    
    $(document).on("click", ".listaMembros", function(){
        var idElemento = $(this).attr('id');
        $("#lista").hide();
        $("#membro").hide();
        $("#convites").hide();
        $("#formulario").show();
        $("#salvar").hide();
        $("#salvar2").show();
        $("#cancelar").show();
        $("#deletar").show();
        
        $("#deletar").click(function(){
            event.preventDefault();
            $("#" + idElemento).remove();
            $("#salvar2").hide;
            $("#deletar").hide();
            $("#formulario").hide();
            $("#lista").show();
            $("#membro").show();
            if($(".listaMembros").length){
                $("#convites").show();
                $("#org").hide();
            }else{
                $("#org").show();
                $("#convites").hide();
            }
        });
        
        $("#salvar2").click(function(){
            $("#form").off().submit(function(){
                event.preventDefault();
                $("#" + idElemento).remove();
                var nome = $("#nome").val();
                var email = $("#email").val();
                var dep = $("#dep").val();
                var acesso = $("#acesso").val();
                $("#lista").append("<button class=" + "listaMembros " + "id=" + idElemento + ">" + acesso + ": " + nome + " - " + email + " - " + dep + "</button>");
                $("#lista").show();
                $("#salvar").hide();
                $("#salvar2").hide();
                $("#deletar").hide();
                $("#cancelar").hide();
                $("#membro").show();
                $("#formulario").hide();
                $("#convites").show();
                $("#nome").val("");
                $("#email").val("");
                $("#dep").val("");
                $("#acesso").val("Usuário");
                key++;
            });
        });
    });
});