$(document).ready(function () {
    function cadastrarTarefa() {
        var tarefa = $("#tarefaInput").val();

        if (tarefa.trim() !== "") {
            $("#listaTarefas").append("<li class='tarefa'>• " + tarefa + "</li>");
            $("#tarefaInput").val(""); // Limpa o campo após cadastrar a tarefa
        }
    }

    // Cadastrar tarefa ao pressionar Enter
    $("#tarefaInput").keypress(function (e) {
        if (e.which === 13) {
            cadastrarTarefa();
        }
    });

    // Cadastrar tarefa ao clicar no botão "Cadastrar"
    $("#btnCadastrar").click(cadastrarTarefa);

    // Marcar/desmarcar tarefa como concluída
    $("#listaTarefas").on("click", ".tarefa", function () {
        $(this).toggleClass("concluida");
    });

    // Mudar cursor para 'hand' ao passar o mouse sobre as tarefas
    $("#listaTarefas").on("mouseenter", ".tarefa", function () {
        $(this).css("cursor", "pointer");
    });

    // Remover cursor personalizado ao retirar o mouse das tarefas
    $("#listaTarefas").on("mouseleave", ".tarefa", function () {
        $(this).css("cursor", "auto");
    });

    // Alternar entre os modos claro e noturno ao clicar no botão
    $("#modoToggle").click(function () {
        $("body").toggleClass("modo-noturno");
    });
});
