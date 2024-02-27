$(".cuadro").hide();

$(".carta").click(
    function () {
        let titulo = $(".titulo", this).html();
        let imagen = $(".imgcarta", this).attr("src")

        $(".cuadro").show();
        $(".titulopopup").html(titulo);
        $(".imgpopup").attr("src", imagen);
    }
)

$(".cerrar").click(
    function () {
        $(".cuadro").hide();
    }
)