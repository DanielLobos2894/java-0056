
$(document).ready(function () {
    $("#calcular").click(function (event) {
        event.preventDefault()
        var valor1 = parseFloat($("#valor1").val())
        var valor2 = parseFloat($("#valor2").val())
        var operacion = $("#operacion").val()
        var resultado = 0
        if (operacion == "suma") {
            resultado = valor1 + valor2
        } else if (operacion == "resta") {
            resultado = valor1 - valor2
        } else if (operacion == "multiplicacion") {
            resultado = valor1 * valor2
        } else if (operacion == "division") {
            resultado = valor1 / valor2
        }
        $("#resultado").text("El resultado es: " + resultado)
    })
})

const cleanUpBtn = document.getElementById("cleanUp")

cleanUpBtn.addEventListener("click", function () {
    const input = document.getElementById("valor1")
    const input2 = document.getElementById("valor2")
    input.value = ""
    input2.value = ""
})
