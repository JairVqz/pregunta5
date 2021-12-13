var btnCargar = document.getElementById("btnCargar");
var i;

btnCargar.addEventListener("click", () => {
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(function (res) {
        let listaJson = document.getElementById("listaJson");
        let json = res.data;
        for (i in json) {
                let lista = document.createElement("li");
                lista.innerHTML = json[i].name + " vive en " + json[i].city;
                listaJson.appendChild(lista);
        }
        console.log(json);
    })
    .catch(function (error) {
        console.log(error)
    })
})