function filterTable() {
    var inputAutor, inputPrecio, selectEstado, table, tr, tdAutor, tdPrecio, tdEstado, i, autor, precio, estado;
    inputAutor = document.getElementById("autorFilter");
    inputPrecio = document.getElementById("precioFilter");
    selectEstado = document.getElementById("estadoFilter");
    table = document.getElementById("librosTabla");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      tdAutor = tr[i].getElementsByTagName("td")[2];
      tdPrecio = tr[i].getElementsByTagName("td")[3];
      tdEstado = tr[i].getElementsByTagName("td")[5];
  
      if (tdAutor && tdPrecio && tdEstado) {
        autor = tdAutor.textContent || tdAutor.innerText;
        precio = parseFloat(tdPrecio.textContent) || 0;
        estado = tdEstado.textContent || tdEstado.innerText;
  
     // Aplicar filtros
        var autorFilter = inputAutor.value.toUpperCase();
        var precioFilter = inputPrecio.value === '' ? 0 : parseFloat(inputPrecio.value.trim().replace('€', ''));
      // Ajustar el filtro para eliminar espacios en blanco y el símbolo de euro
        var estadoFilter = selectEstado.value.toUpperCase();



        if (
          (autor.toUpperCase().indexOf(autorFilter) > -1) &&
          (precio >= precioFilter) &&
          (estado.toUpperCase().indexOf(estadoFilter) > -1)
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  