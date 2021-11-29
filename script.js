const modele = function(e){
    e.preventDefault();
    let message = $('#message').val();
    const vignette = `<div class="vignette">`;
    const buttons = `<div class='buttons'></div>`;
    const edit = `<button class="btn edit"><i class="fa fa-edit" style="font-size:24px;margin:8px 5px;"></i></button>`;
    const deleti = `<button class="btn delete"><i class="fa fa-close" style="font-size:20px;"></i></button>`;
    const line = `<div class="line"></div>`;
    const content = `<div class="content"></div>`;
    const p = `<p>${message}</p>`;
    render(content, p, line, buttons, vignette, edit, deleti);
};

const render = function(content, p, line, buttons, vignette, edit, deleti){
    let cont = $(content).append(p);
    let btns = $(buttons).append(edit).append(deleti);
    let vue = $(vignette).append(btns).append(line).append(cont);
    $('section').append(vue);
    let input = $('form').children('textarea');
    input.val("");
};

$('#submit').click(modele);

$(document).on('click', '.delete', function(){
    $(this).parent().parent().remove();
});

$(document).on('click', '.edit', function(){
    let text = $(this).parent().parent().children('.content').children('p').text();
    let input = $('form').children('textarea');
    input.val(text);
    $(this).parent().parent().remove();
});