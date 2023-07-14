var ProuductName = document.getElementById("ProuductName");
var ProuductAge = document.getElementById("ProuductAge");
var ProuductPhone = document.getElementById("ProuductPhone");
var btnsubmit = document.getElementById("btnsubmit");
var inputsearch = document.getElementById("inputsearch");
var inputs=document.getElementsByClassName("form-control");
var namealert=document.getElementById("namealert");
var agealert= document.getElementById("agealert");
var phonealert=document.getElementById("phonealert")
var Products =[];
var currentIndex=0;
var mood = 'add contact'




if(JSON.parse(localStorage.getItem("ContactList"))!=null){

  Products=JSON.parse(localStorage.getItem("ContactList"))
  displayData()
}

var text= JSON.parse(localStorage.getItem("ContactList"))



btnsubmit.onclick=function(){
 
   addProduct()
   displayData()
   clearForm()
 
}


function addProduct(){

  var product=
  {
    name:ProuductName.value,
    age:ProuductAge.value,
    phone:ProuductPhone.value
  }
    
  Products.push(product)
  localStorage.setItem("ContactList",JSON.stringify(Products))
}


function displayData(){
  var table = "";
  for(var i =0;i<Products.length;i++){
    table+=
    `
    <tr>
     
    <td>
     ${[i+1]}
    </td>
    <td>
     ${Products[i].name}
    </td>
    <td>
     ${Products[i].age}
    </td>
    <td>
     ${Products[i].phone}
    </td>

    <td>
      
     <button onclick="deleteProduct(${i})" class="btn btn-warning  "> delete</button>
     <button onclick="update(${i})" class="btn btn-danger ml-5 "> update</button>

    </td>
    
    </tr>
    `
    document.getElementById("table-tbody").innerHTML=table;
  }
}

function clearForm(){
  for(var i =0;i<inputs.length;i++){
    inputs[i].value=""
  }
}

function deleteProduct(index){
  
  Products.splice(index,1);

  displayData()
  localStorage.setItem("ContactList",JSON.stringify(Products))
  
}

function update(i){

  ProuductName.value=Products[i].name;
  ProuductAge.value=Products[i].age;
  ProuductPhone.value=Products[i].phone;

  btnsubmit.innerHTML='Update contact'

  mood= 'update contact'

}


inputsearch.onkeyup=function(){
  var table = "";
  var val =inputsearch.value;
  for(var i =0;i<Products.length;i++){
    if(Products[i].name.toLowerCase().includes(val.toLowerCase())){
      table+=
      `
      <tr>
       
      <td>
       ${[i+1]}
      </td>
      <td>
       ${Products[i].name}
      </td>
      <td>
       ${Products[i].age}
      </td>
      <td>
       ${Products[i].phone}
      </td>
  
      <td>
        
       <button onclick="deleteProduct(${i})" class="btn btn-warning  "> delete</button>
       <button onclick="updateProduct(${i})" class="btn btn-danger ml-5 "> update</button>
  
      </td>
      
      </tr>
      `
      document.getElementById("table-tbody").innerHTML=table;
    }
    }


}




ProuductName.onkeyup=function()
{
  
   var namerejex=/^[A-z][a-z]{2,15}$/;

   if(!namerejex.test(ProuductName.value)){

    btnsubmit.disabled="true";

    ProuductName.classList.add("is-invalid")
    ProuductName.classList.remove("is-valid")
    namealert.classList.remove("d-none")
    return false



   }
   else {

    btnsubmit.removeAttribute("disabled")
    ProuductName.classList.add("is-valid")
    ProuductName.classList.remove("is-invalid")
    namealert.classList.add("d-none")
    return true
   }

}


ProuductAge.onkeyup=function()
{
  
   var namerejex=/^[10-80]{2,15}$/;

   if(!namerejex.test(ProuductAge.value)){

    btnsubmit.disabled="true";

    ProuductAge.classList.add("is-invalid")
    ProuductAge.classList.remove("is-valid")
    agealert.classList.remove("d-none")
    return false



   }
   else {

    btnsubmit.removeAttribute("disabled")
    ProuductAge.classList.add("is-valid")
    ProuductAge.classList.remove("is-invalid")
    agealert.classList.add("d-none")
    return true
   }

}
ProuductPhone.onkeyup=function()
{
  
   var namerejex=/^01[0125][0-9]{8}$/;

   if(!namerejex.test(ProuductPhone.value)){

    btnsubmit.disabled="true";

    ProuductPhone.classList.add("is-invalid")
    ProuductPhone.classList.remove("is-valid")
    phonealert.classList.remove("d-none")
    return false



   }
   else {

    btnsubmit.removeAttribute("disabled")
    ProuductPhone.classList.add("is-valid")
    ProuductPhone.classList.remove("is-invalid")
    phonealert.classList.add("d-none")
    return true
   }

}