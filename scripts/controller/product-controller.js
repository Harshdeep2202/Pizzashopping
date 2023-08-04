//data excahnge bw view and model
//contolller-i/o view layer.
//product contolller-it is a glue bw view and model
// window.addEventListener(
//     'load',bindevents()
// )

// function bindevents(){
// document.getElementById("clickme").addEventListener(
//   'click',
//   ()=>{
//        alert("hello");
//   }
// )
// }  

import productoperations from "../services/product-operation.js";

async function loadpizza(){
    const pizza=await productoperations.loadproducts();
    console.log("pizza are  :", pizza);
    console.log(pizza[0].name);
   console.log(pizza[0].description);
   for(let p of pizza){
      dynamicdisplay(p);
      
   }
  }
//   const rowdiv=document.getElementById("loaddata");
//   console.log(rowdiv);
//     let pizzalen=pizza.length;

// for(let index=0;index<pizzalen;index++){
//     const col=document.createElement('div');
//      col.classList.add('col-4');
//      col.innerHTML=`
//      <div class="card" >
//                         <img src="${pizza[index].url}" class="card-img-top" alt="...">
//                          <div class="card-body">
//                            <h5 class="card-title">${pizza[index].name}</h5>
//                            <p class="card-text">${pizza[index].description}</p>
//                            <a href="#" class="btn btn-primary">Add to Cart</a>
//                          </div>
//                        </div>
//                        </div>
//                        `;
//                        rowdiv.appendChild(col);

// }

function addtocart(){
  console.log("add to cart is called",this);
  const pizzaid=this.getAttribute('product-id');
 console.log(pizzaid);
  productoperations.searchproducts(pizzaid);
  const resultarray=productoperations.addedtocart();
 // const coldiv=document.getElementById('disp');
  const ol=document.getElementById('cart');
   ol.innerHTML='';
  for (let p of resultarray){
   
    var listitem=document.createElement('li');
    //var listitemprice=document.createElement('li');
    var pre=document.createElement('pre');
   // pre.innerText=listem
    listitem.innerText=`${p.name}  ${p.price}`;
   // listitemprice.innerText=`${p.price}`;
    //pre.appendChild(listitem);
    ol.appendChild(listitem);
    //coldiv.appendChild(ol);


  }
  sum1();
  console.log('h2');
  gstsum();
  console.log('h1');
}

function sum1(){
  const dddiv=document.getElementById('answer');
  dddiv.innerHTML='';
  const sumarray=productoperations.addedtocart();
  const sum=sumarray.reduce((sum,e)=>{//sum= sum+parseFloat(e.price)
  return sum+parseFloat(e.price);
  },0);
  console.log(sum);
  var head=document.createElement('p');
 // var newline=document.createElement('br');
  head.innerText=`Sum before gst is ${sum}`;
  console.log(head);
 // ol.appendChild(newline);
  dddiv.appendChild(head);
}


function gstsum(){
 
  const ddiv=document.getElementById('answer');
  const gstarray=productoperations.addedtocart();
  //const maparray=gstarray.map(e=>parseFloat(e.price)+parseFloat(0.18*e.price));
  //console.log(maparray);
 const result=gstarray.reduce( (sum,e)=>{
  return sum+parseFloat(e.price);
 },0);
 console.log("result  ",result);
 const gsum=result+0.18*result;
 console.log(gsum);
  const ans=document.createElement('p');
  //var an=document.createElement('br');
  ans.innerText=`Sum after gst is ${gsum}`;
 //ol.appendChild('an');
  ddiv.appendChild(ans);
}


loadpizza();
function dynamicdisplay(p){
  //console.log(p.name);
  const rowdiv=document.getElementById("loaddata");
  var ppdiv=document.createElement('div');
 // rowdiv.appendChild(ppdiv);
  ppdiv.classList.add('col-4');
 // rowdiv.appendChild(ppdiv);
  var pdiv=document.createElement('div');
  pdiv.classList.add('card');
 // ppdiv.appendChild(pdiv);
  var img=document.createElement('img');
  img.classList.add('card-img-top');
  img.src= p.url;
  pdiv.appendChild(img);
  var cdiv=document.createElement('div');
  cdiv.classList.add('card-body');
  pdiv.appendChild(cdiv);
  var head=document.createElement('h5');
  head.classList.add('card-title');
  head.innerText=p.name;
  cdiv.appendChild(head);
  var para=document.createElement('p');
  para.classList.add('card-text');
  para.innerText=p.description;
  cdiv.appendChild(para);
  var button=document.createElement('button');
  button.className='btn btn-primary';
  button.innerText='Add to cart';
  button.setAttribute('product-id',p.id);
  button.addEventListener('click',addtocart);
  cdiv.appendChild(button);
 ppdiv.appendChild(pdiv);
 rowdiv.appendChild(ppdiv);
}