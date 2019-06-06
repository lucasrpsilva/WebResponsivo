$(document).ready(function(){
    //Assim que o site for aberto, os botões são escondidos
    $("#formulario").hide();
    $("#convites").hide();
    $("#salvar2").hide();
    $("#deletar").hide();
    
    var key = 0; //Chave única de cada membro
    var dados = []; //Vetor que conterá os dados dos membros
    
    //Executa quando clicar em "Adicionar membro"
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
    
    //Executa quando cliclar em "Cancelar
    $("#cancelar").click(function(){
        $("#salvar2").hide;
        $("#deletar").hide();
        $("#formulario").hide();
        $("#lista").show();
        $("#membro").show();
        if($(".listaMembros").length){ //Se existir membros, o botão de enviar convites ficará visível
            $("#convites").show();
            $("#org").hide();
        }else{ //Se não, ficará visível o botão "Ir para org"
            $("#org").show();
            $("#convites").hide();   
        }
    });
    
    //Executa quando um novo membro é salvo
    $("#salvar").click(function(){
        $("#form").off().submit(function(){ //Irá executar apenas se os dados forem preenchidos apropriadamente
            event.preventDefault(); //Impede que aconteça um submit e os dados sejam perdidos
            var nome = $("#nome").val();
            var email = $("#email").val();
            var dep = $("#dep").val();
            var acesso = $("#acesso").val();
            $("#lista").append("<button class=" + "listaMembros " + "id=" + key + ">" + acesso + ": " + nome + " - " + email + " - " + dep + "</button>"); //Cria um novo botão na div "#lista" com as informações inseridas no formulário
            dados.push([key, acesso, nome, email, dep]); //Salva as informações do membro em um vetor
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
            key++; //Os valores são resetados e a key é incrementada para que o próximo membro cadastrado possua uma chave diferente
        });
    });
    
    //Executa quando clicar em um membro já salvo
    $(document).on("click", ".listaMembros", function(){
        var idElemento = $(this).attr('id'); //Pega a chave do membro clicado
        $("#lista").hide();
        $("#membro").hide();
        $("#convites").hide();
        $("#formulario").show();
        $("#acesso").val(dados[idElemento][1]); //Preenche o formulário de acordo com os dados que foram salvos no vetor
        $("#nome").val(dados[idElemento][2]);
        $("#email").val(dados[idElemento][3]);
        $("#dep").val(dados[idElemento][4]);
        $("#salvar").hide();
        $("#salvar2").show();
        $("#cancelar").show();
        $("#deletar").show();
        
        //É executado quando o membro é excluído
        $("#deletar").click(function(){
            event.preventDefault();
            $("#" + idElemento).detach(); //Apaga o elemento que possui o id = chave do membro desejado
            $("#salvar2").hide;
            $("#deletar").hide();
            $("#formulario").hide();
            $("#lista").show();
            $("#membro").show();
            $("#nome").val("");
            $("#email").val("");
            $("#dep").val("");
            $("#acesso").val("Usuário");
            if($(".listaMembros").length){
                $("#convites").show();
                $("#org").hide();
            }else{
                $("#org").show();
                $("#convites").hide();
            }
        });
        
        //Atualiza as informações do membro
        $("#salvar2").click(function(){
            $("#form").off().submit(function(){
                event.preventDefault();
                $("#" + idElemento).detach();
                var nome = $("#nome").val();
                var email = $("#email").val();
                var dep = $("#dep").val();
                var acesso = $("#acesso").val();
                $("#lista").append("<button class=" + "listaMembros " + "id=" + idElemento + ">" + acesso + ": " + nome + " - " + email + " - " + dep + "</button>");
                dados[idElemento] = [idElemento, acesso, nome, email, dep];
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
            });
        });
    });
});