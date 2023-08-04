//contains the logic for fetching
//adding,searching,sorting

import product from "../models/product.js";
import makenetworkcall from "../services/api-client.js";


 const productoperation={
   products:[],
   async loadproducts(){
   const pizza= await makenetworkcall();
   //console.log(pizza);
   const pizzaarray=pizza['Vegetarian'];
   const productarray=pizzaarray.map(pizza=>{
    const currentpizza=new product(pizza.id,pizza.name,pizza.menu_description,pizza.assets.product_details_page[0].url,pizza.price);
    console.log("products");
    return currentpizza;
   })
   this.products=productarray;
   console.log("product array is ",productarray);
   return productarray;

    },
    addedtocart(){
      const cartarray=this.products.filter(product=>product.isaddedtocart);
      console.log("cart array is ",cartarray);
      return cartarray;
    },
    sortproducts(){
       
    },
    searchproducts(id){
      const searchpizza =this.products.find(product=>product.id==id);
      searchpizza.isaddedtocart=true;
      console.log("searchpizza is",searchpizza);
    }
 }
 export default productoperation;