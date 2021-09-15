function clicou(){
    alert("Clicando confirma que vai casar com o Coelho");
    var casar = prompt("Aceita casar com ele?");
    if (casar == "sim"){
        alert("PARABÉNS! O desenvolvedor considera um sim.")
    }else{
        alert("Qualquer resposta diferente de sim será considerada um sim!");
    }
}

function redirecionar(){
    window.open("https://www.instagram.com/p/CSVQRUAttsN/");
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Volte Sempre";
   elemento.innerHTML = "My Little Angel";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
    elemento.innerHTML = "Passar o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);



function setReplace(frase, nome, novo_nome){
    //return frase.replace(nome, novo_nome)


alert(soma(5, 10));
alert(setReplace("Vai Minas", "Minas", "Praia Clube"));



var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());


var count;
for(count=0; count <= 5; count++){
    alert(count);
}


var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
};

var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[0].cor);

var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista);
//console.log(lista.join(" | "));

/*
var nome = "Deivi Coelho";
var n1 = 5;
var n2 = 3;
var frase = "Minas é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(n1 + n2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Minas","Praia Clube"));
//console.log"(frase.ToUpperCase()); -> coloca a var frase em maiúsculo
alert(frase.replace("Minas","Praia Clube"));
*/