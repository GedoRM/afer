$(document).ready(function() { 
    var valor;
    $('body').on('click', 'a:has(img)', function(e) {
        e.preventDefault();
        valor = $(this).attr('class');
        clase = "." + valor;
        lc_lightbox(clase, {
            wrap_class: 'lcl_fade_oc',
            gallery: true,
            thumb_toggle: true
        });
    })
});
