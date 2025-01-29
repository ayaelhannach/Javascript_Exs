var quantite = document.getElementById('quantite')
var btnAjt = document.getElementById('ajouter')
var req = document.getElementsByClassName("req")
var consol = document.getElementById("console")
var table = document.querySelector("table")
var ht = document.querySelector("#ht")


var choixConsole = document.createElement("option")
    choixConsole.textContent="Choisre une console"
    consol.appendChild(choixConsole)

const donnes={
        "consoles":[
             {'ref':'Nintendo Switch Oled','prix':4500,'Manette':2,'Image':'images/img1.jpg'},
             {'ref':'PlayStation','prix':8000,'Manette':4,'Image':'images/img2.jpg'}
        ]
    }

donnes.consoles.map((x)=>{
    //  var addCn= document.createElement("option")
    //  addCn.textContent=x.ref
    //  addCn.value=x.ref
    //  consol.appendChild(addCn)
    consol.innerHTML+=`
    <option value="${x.ref}">${x.ref}</option>
    `
    
})



function valid (){
    function qntValid() {
        if(quantite.value < 1 || quantite.value>20){
        
            req[1].style.display="block"
            return false
        }
        else{
            req[1].style.display="none"
            return true
        }
    }
    function srlrctValid() {
        if(consol.value=="Choisre une console"){
            
            req[0].style.display="block"
            return false
        }
        else{
            req[0].style.display="none"
            return true
        }
        
    }
    
    qntValid()
    srlrctValid()
    if ( qntValid()  && srlrctValid()) {
        addToCart()
    }
    
  
}
var totalHT = 0
function addToCart() {
    donnes.consoles.map((x)=>{
        if(x.ref == consol.value ){
            table.innerHTML+=`
            <tr>
                            <td>${x.ref}</td>
                            <td>${x.prix}</td>
                            <td>${quantite.value}</td>
                            <td><img src="${x.Image}"></td>
                            <td onclick="deleteConsole(this)">supprimer</td>
                        </tr>
            `
           
     function calculHT() {
           totalHT = totalHT +(x.prix * quantite.value * 0,9 )
          ht.textContent = totalHT +"DH"
    
}calculHT()
        }})}

function deleteConsole(xx){
    console.log(xx.parentNode.remove());
}

// btnAjt.addEventListener("click",valid)
btnAjt.onclick= valid
console.log(req);
