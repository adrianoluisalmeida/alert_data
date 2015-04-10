$(document).ready(function () {

    //Class do form para verificar os dados
    var formObject = $('.form_example');

    formObject.data('originalForm', formObject.serialize());

    message = "Se você sair da página sem salvar, todos os dados serão perdidos.";

    $(':submit').click(function () {
        window.onbeforeunload = null;
    });

    window.onbeforeunload = function () {
        if ((formObject.data('originalForm') !== formObject.serialize() || document.referrer === window.location.href) && formObject.data('originalForm') !== undefined) {
            return message;
        }
    };
});
