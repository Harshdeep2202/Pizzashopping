//http//https call
import url from '../utils/const.js';
 async function makenetworkcall(){
    try{
   const response= await fetch(url);
   const object=await response.json();
    return object;
   
}
catch(e){
    console.log("error is ",e);
    throw e;

}
 }
export default makenetworkcall;
