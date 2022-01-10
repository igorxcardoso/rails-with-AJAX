// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


//= require jquery
//= require jquery_ujs



// Verifica se o compo está carregado
$(document).ready(() => {
    $(".cascata #endereco_estado_id").change(() => {
        // Ação AJAX
        cidade_id = $(".cascata #endereco_estado_id").val();

        if(cidade_id == "") {
            $(".cascata #endereco_cidade_id").html("");
            return;
        }

        $.ajax("/cidades.json?estado_id=" + cidade_id)
        .done(function(data) {
            var htmlOptions = "";
            for(let d of data) {
                htmlOptions += "<option value='" + d.id + "'>" + d.nome + "</option>";
            }
            $("#endereco_cidade_id").html(htmlOptions);
        })
        .fail(() => alert('error'))
    })
})