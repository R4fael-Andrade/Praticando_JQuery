$('document').ready(function() {
    
    const conteudo = document.querySelector('#conteudo');

    $('form').submit(function(e) {
    
        e.preventDefault();
        const tarefa = $('#input-tarefa').val();
    
        const novoItem = $(`<li> ${tarefa} </li>`);
        $(novoItem).appendTo(conteudo);
       
        $('#input-tarefa').val('');
    

        $('#conteudo li').click(function() {
            $('#conteudo li').removeClass("item-clicado");
            $(this).addClass("item-clicado");
        })

    })
    
   
})


