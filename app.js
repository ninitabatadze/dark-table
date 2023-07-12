function tableSearch() {
    let input, filter, table, tr, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
    for (let i = 1; i < tr.length; i++) {
        let displayRow = false;
        let tds = tr[i].getElementsByTagName("td");
        for (let j = 0; j < tds.length; j++) {
            td = tds[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    displayRow = true;
                    break;
                }
            }
        }
        if (!displayRow) {
            tr[i].style.display = "none";
        }
    }
}