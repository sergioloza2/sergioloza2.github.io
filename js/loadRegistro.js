fetch("https://backendclockin.azurewebsites.net/api/RegistroLaboral/data")
  .then((response) => response.json())
  .then((dataRaw) => {
    let tableBody = document.getElementById("table-body");

    let username = tableBody.getAttribute("data-username");
    let data = filterEmployee(dataRaw, username);

    for (let row of data) {
      console.log(row);
      let [fecha, hora] = row.hora.split(" ");
      let dataRow = document.createElement("tr");
      dataRow.style.height = "45px";

      let dataCol = document.createElement("th");
      dataCol.classList.add("u-border-1", "u-border-grey-30", "u-table-cell");
      dataCol.innerHTML = hora;

      let dataCol2 = document.createElement("th");
      dataCol2.classList.add("u-border-1", "u-border-grey-30", "u-table-cell");
      dataCol2.innerHTML = fecha;

      let dataCol3 = document.createElement("th");
      dataCol3.classList.add("u-border-1", "u-border-grey-30", "u-table-cell");
      dataCol3.innerHTML = 5;

      dataRow.appendChild(dataCol);
      dataRow.appendChild(dataCol2);
      dataRow.appendChild(dataCol3);
      tableBody.appendChild(dataRow);
    }
  })
  .catch((error) => {
    console.log("Error:", error);
  });

function filterEmployee(data, employee) {
  let filtered = [];
  for (let item of data) {
    if (item.trabajador.nombreUsuario === employee) {
      filtered.push(item);
    }
  }

  return filtered;
}
