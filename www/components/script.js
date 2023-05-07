var nomes = []
var username


function VetorPush() {
    username = document.getElementById('username').value
    nomes.push(username)
    alert(nomes)
}

function VetorUnshift() {
    username = document.getElementById('username').value
    nomes.unshift(username)
    alert(nomes)
}

function VetorPushDelete(){
    nomes.pop()
    alert(nomes)
}

function VetorUnshiftDelete(){
    nomes.shift()
    alert(nomes)
}

function Exibir(){
    alert(nomes)
}

function Search(){
    var searchValor = parseInt(document.getElementById('valorSearch').value)
    alert(nomes[searchValor-1])
}

function Listar(){
    for(var i = 0; i < nomes.length; i++){
        var node = document.createElement("li");
        var textnode = document.createTextNode(nomes[i]);
        node.appendChild(textnode);
        document.getElementById("listarNomes").appendChild(node);
    }
}