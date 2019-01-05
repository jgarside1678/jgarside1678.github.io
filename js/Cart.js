var ShoppingCart;
var ProductHolder;
var NumberOfProducts;
var CartTotal = 0;
var TotalPrice;

window.onload = function(){
	main();
	DeleteProduct();
}

function main(){
	HeaderWelcome()
	TotalPrice = document.getElementById('TotalPrice');
	ProductHolder = document.getElementById('ProductHolder');
	if(localStorage.getItem('Shopping Cart PN')){
	   NumberOfProducts = localStorage.getItem('Shopping Cart PN')
	   ShoppingCart = JSON.parse(localStorage.getItem('Shopping Cart'));
	   for(var x = 0; x < NumberOfProducts; x++){
		 if(ShoppingCart[x] != null){
		 var Product = ShoppingCart[x];
		 var ProductTotal = Product[3] * Product[4];
		 CartTotal += ProductTotal;
		 console.log('Product added');
		 ProductHolder.innerHTML += '<div class ="CartProduct" id=CartProduct'+x+'>'
		 +'<img style="width:140px; height:140px; display:inline-block;" id ="PIS1"src="../assets/Shoes/'+Product[0]+'/'+Product[0]+'_'+Product[1]+'_0.jpg">'
		 +'<div class="CartProductDescription" ><h1>'+Product[0]+' Shoes</h1>'
		 +'<p>Size: '+Product[2]+'</p>'
		 +'<p>Colour id: '+Product[1]+'</p>'
		 +'<p>Quantity: '+Product[4]+'</p>'
		 +'<p class="CartPrice"> &pound;'+Product[3]+'</p>'
		 +'<p class="CartDelete" data-id="'+x+'" >Delete</p>'
		 +'</div>'
		+'</div>';
		 }
	   }
	   TotalPrice.innerHTML = '<p>Number of products:'+NumberOfProducts+'</p><p>Product total: &pound;'+parseFloat(CartTotal).toFixed(2)+'</p><p>Delivery Charge: Free</p><p>Total: &pound;'+parseFloat(CartTotal).toFixed(2)+'</p>';
	}
	else{
		ProductHolder.innerHTML = '<h1>No products in shopping cart</h1>';
	   TotalPrice.innerHTML = '<p>Number of products:'+NumberOfProducts+'</p><p>Product total: &pound;0</p><p>Delivery Charge: Free</p><p>Total: &pound;0</p>';
	}
	if(NumberOfProducts == 0){
		ProductHolder.innerHTML = '<h1>No products in shopping cart</h1>';
	   TotalPrice.innerHTML = '<p>Number of products:'+NumberOfProducts+'</p><p>Product total: &pound;0</p><p>Delivery Charge: Free</p><p>Total: &pound;0</p>';
	}
}


function DeleteProduct(){
    ProductHolder.addEventListener('click', function(e){
	
      if(e.target.className == 'CartDelete') {
		  var DeleteData = e.target.dataset.id;
		  $('#CartProduct'+DeleteData+'').fadeOut();
		  console.log(DeleteData);
		  console.log(ShoppingCart.length);
		  console.log(ShoppingCart[DeleteData]);
		  var DeletePrice = ShoppingCart[DeleteData];
		  var DeletedAmount = (DeletePrice[3] * DeletePrice[4]);
		  CartTotal -= DeletedAmount;
		  ShoppingCart[DeleteData] =null;
		  if(NumberOfProducts > 0){
		  NumberOfProducts --;
		  }
		  window.localStorage.setItem('Shopping Cart', JSON.stringify(ShoppingCart));
		  window.localStorage.setItem('Shopping Cart PN', NumberOfProducts);
	      if(NumberOfProducts == 0){
	     	ProductHolder.innerHTML = '<h1>No products in shopping cart</h1>';
	        TotalPrice.innerHTML = '<p>Number of products:'+NumberOfProducts+'</p><p>Product total: &pound;0</p><p>Delivery Charge: Free</p><p>Total: &pound;0</p>';
	      }
		  else{
	      TotalPrice.innerHTML = '<p>Number of products: '+NumberOfProducts+'</p><p>Product total: &pound;'+parseFloat(CartTotal).toFixed(2)+'</p><p>Delivery Charge: Free</p><p>Total: &pound;'+parseFloat(CartTotal).toFixed(2)+'</p>';
		  }
      }
    });
}
function HeaderWelcome(){
	var AccountName = document.getElementById('AccountName');
	if(localStorage.getItem('Username')){
		var UserName = localStorage.getItem('Username')
		console.log(UserName);
		AccountName.innerHTML = ' &nbsp;&nbsp; Welcome Back &nbsp;&nbsp;'+UserName+'';
		$('#LoginButton').html('&nbsp;&nbsp; Log Out');
	}
}