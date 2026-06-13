let totalGeneral = 0;

function registrarProducto(){

    try{ 
        let producto = document.getElementById("producto").value;
        let precio = parseFloat(document.getElementById("precio").value);
        let cantidad = parseInt(document.getElementById("cantidad").value);

        if(producto === ""){
            throw "Ingrese el nombre del producto";
        }

        if(isNaN(precio) || precio <= 0){
            throw "Ingrese un precio válido";
        }

        if(isNaN(cantidad) || cantidad <= 0){
            throw "Ingrese una cantidad válida";
        }

        let total = precio * cantidad;
        totalGeneral += total;

        mostrarResultado(producto, precio, cantidad, total, totalGeneral);

    }
    catch(error){
        alert(error);
    }
}

function mostrarResultado(producto, precio, cantidad, total, totalGeneral){

    document.getElementById("resultado").innerHTML += `
        <div class="card">
            <h3>🧾 Producto registrado</h3>

            <p><strong>Producto:</strong> ${producto}</p>
            <p><strong>Precio:</strong> S/ ${precio}</p>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Total:</strong> S/ ${total}</p>
        </div>

        <div class="total">
            💰 Total acumulado: S/ ${totalGeneral}
        </div>
    `;

    // limpiar inputs (mejora UX)
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
}