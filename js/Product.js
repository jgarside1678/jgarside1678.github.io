
var BackgroundColorImages;
var ShoeType;
var ActualQuantityData;
var ActualSizeData;
var ActualPriceData;
var ActualColourData;



window.onload = function(){
	Main();


}
function Main(){
	HeaderWelcome();
	if($('#ProductDescription').length>0){
		
	var MainBody = document.getElementById('Main');
	ShoeType = MainBody.getAttribute('data-shoetype');
	ActualColourData = 0;
	ActualQuantityData = 1;
	ProductImagesLoad();
	BackgroundColorImages = ['../assets/Shoes/'+ShoeType+'/'+ShoeType+'_0_0.jpg','../assets/Shoes/'+ShoeType+'/'+ShoeType+'_1_0.jpg','../assets/Shoes/'+ShoeType+'/'+ShoeType+'_2_0.jpg','../assets/Shoes/'+ShoeType+'/'+ShoeType+'_3_0.jpg']
	
	var ProductImages = document.getElementById('ProductImagesSmall');
    ProductImages.addEventListener('click', function(e) {

	var p = e.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, e.target);
	
      if(e.target.className == 'ProductImageSmall') {
		  $('.ProductImageSmall').css('border', 'none');
		  $('.ProductImageLarge').css('display', 'none');
		  var LImageID = document.getElementById("PIL"+index+"");
		  LImageID.style.display = "block";
		  var SImageID = document.getElementById(e.target.id)
		  SImageID.style.border = '1px solid black';
      }
    }, false); 
	Colours();
	SizeSelector();
	QuantitySelector()	
	AddToCart();
	}
	Ratings();
	
}
function Ratings(e){
    var AvailableProductRating = document.getElementsByClassName('AvailableProductRating');

    for(i=0;i< AvailableProductRating.length; i++) {
    var RatingStars = AvailableProductRating[i].getAttribute('data-stars');
	var Parts = RatingStars.toString().split('.');
	var Number = parseInt(Parts[0]);
	var Decimal = parseInt(Parts[1]);
    var DecimalStar = 4 + Decimal;
	var RatingNumbers = AvailableProductRating[i].getAttribute('data-ratings-numbers');

	for(var v = 0; v < Number; v++){
		AvailableProductRating[i].innerHTML += '<i class="fas fa-star"></i>';
	}
	if(Decimal != 0){
	   AvailableProductRating[i].innerHTML += '<i style="width:'+DecimalStar+'px; overflow:hidden;" class="fas fa-star"></i>';
	}
	AvailableProductRating[i].innerHTML += '&nbsp;&nbsp; &nbsp;&nbsp;'+RatingNumbers+'';
	console.log(RatingStars);
  }
}

function Colours(){
	var ProductColours = document.getElementById('ProductColours');
	var ColourVariations = ProductColours.getAttribute('data');
	console.log(ColourVariations);
	for(var x = 0; x < ColourVariations; x++){
		BackgroundImg = BackgroundColorImages[x];
		ProductColours.innerHTML += '<div class="ProductColour" id="Colour'+x+'" data-id='+x+' style="background-image: url('+BackgroundImg+')"></div>'
	}
	
	var ProductColour = document.getElementById('ProductDescription');
    ProductColour.addEventListener('click', function(e){
	
      if(e.target.className == 'ProductColour') {
		  $('.ProductColour').css('border', 'none');
		  var ColourID = document.getElementById(e.target.id)
		  ColourID.style.border = '1px solid black';
		  
		  ActualColourData = ColourID.getAttribute('data-id');
		  ProductImagesLoad();
		  console.log(ActualColourData);
      }
    });
	
}
function ProductImagesLoad(){
	var PIS = document.getElementById('ProductImagesSmall')
	PIS.innerHTML = '';
	PIS.innerHTML += '<img style ="border: 1px solid black;" class="ProductImageSmall" id ="PIS0" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_0.jpg">'
		+'<img class="ProductImageSmall" id ="PIS1"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_1.jpg">'
		+'<img class="ProductImageSmall" id ="PIS2"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_2.jpg">'
		+'<img class="ProductImageSmall" id ="PIS3"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_3.jpg">'
		+'<img class="ProductImageSmall" id ="PIS4"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_4.jpg">'
		+'<img class="ProductImageSmall" id ="PIS5"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_5.jpg">'
		+'<img class="ProductImageSmall" id ="PIS6"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_6.jpg">'
		+'<img class="ProductImageSmall" id ="PIS7"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_7.jpg">'
		
    var PIL = document.getElementById('ProductImagesLarge')
	PIL.innerHTML = '';
	PIL.innerHTML += '<img class="ProductImageLarge" id="PIL0" style ="display:block;" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_0.jpg">'
		+'<img class="ProductImageLarge" id="PIL1" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_1.jpg">'
		+'<img class="ProductImageLarge" id="PIL2" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_2.jpg">'
		+'<img class="ProductImageLarge" id="PIL3" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_3.jpg">'
		+'<img class="ProductImageLarge" id="PIL4" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_4.jpg">'
		+'<img class="ProductImageLarge" id="PIL5" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_5.jpg">'
		+'<img class="ProductImageLarge" id="PIL6" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_6.jpg">'
		+'<img class="ProductImageLarge" id="PIL7" src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_7.jpg">'
}

function SizeSelector(){
	var SizeChart = document.getElementById('SizeChart');
    SizeChart.addEventListener('click', function(e){
	
      if(e.target.className == 'Size') {
		  $('.Size').css('border', '1px solid grey');
		  var SizeID = document.getElementById(e.target.id)
		  SizeID.style.border = '2px solid black';
		  
		  ActualPriceData = SizeID.getAttribute('data-price');
		  ActualSizeData = SizeID.getAttribute('data-size');
		  var PriceLine = document.getElementById('ProductPrice');
		  PriceLine.innerHTML = '&pound;'+ActualPriceData+'';
		  console.log(ActualPriceData);
      }
    });
}
function QuantitySelector(){

	var QuantityDD = document.getElementById('DropDownQuantity');
	QuantityDD.addEventListener('click', function(){
		var OtherQuantitys = document.getElementById('OtherQuantitys');
		if(OtherQuantitys.style.display == "block"){
			OtherQuantitys.style.display = "None";
		}
		else{
			OtherQuantitys.style.display = "block";
            OtherQuantitys.addEventListener('click', function(e){
	
            if(e.target.className == 'Quantity') {
		    var QuantityID = document.getElementById(e.target.id)
			ActualQuantityData = QuantityID.getAttribute('data-quantity');
			OtherQuantitys.style.display ="None";
		  
		    var SelectedQuantity = document.getElementById('SelectedQuantity');
		    SelectedQuantity.innerHTML = ActualQuantityData;
		    console.log(ActualQuantityData);
      }
    });
		}
	})

}

function AddToCart(){
	var ProductNumber; 
	var ShoppingCart
	var RecentCart = document.getElementById('CartRecent');
	var AddToCartButton = document.getElementById('AddToCartButton');
	
	if(localStorage.getItem('Shopping Cart PN')) {
		var SC = JSON.parse(localStorage.getItem('Shopping Cart'));
	    ProductNumber = localStorage.getItem('Shopping Cart PN');
		ShoppingCart = SC;
	}
	
	else{
	ProductNumber = 0;
	ShoppingCart = [];
	}
	
	AddToCartButton.addEventListener('click', function(){
		console.log(ProductNumber);
		if((ActualPriceData == null) || (ActualSizeData == null)){
			alert('please select a size');
		}
		else{
		console.log('Product Added to Basket');
		var ProductCode = ''+ShoeType+''+ActualColourData+''+ActualSizeData+'';	
		ShoppingCart[ProductNumber] = [ShoeType, ActualColourData, ActualSizeData, ActualPriceData, ActualQuantityData, ProductCode];
		console.log(ShoppingCart[ProductNumber]);
		ProductNumber++;
		
		var TotalPrice = (ActualPriceData * ActualQuantityData);
		$('#CartRecent').fadeIn(300);
		RecentCart.innerHTML = '<img class="ProductImageSmall" id ="PIS1"src="../assets/Shoes/'+ShoeType+'/'+ShoeType+'_'+ActualColourData+'_0.jpg">'
		+'<div class="RecentCartText"><p style="margin-bottom:3px;">Added to Basket x '+ActualQuantityData+'</p>'
		+'<p class="RecentCartDetails">'+ShoeType+'</p>'
		+'<p class="RecentCartDetails">Size: '+ActualSizeData+'</p>'
		+'<p class="RecentCartDetails">Price per unit:  &pound;'+ActualPriceData+'</p>'
		+'<p class="RecentCartDetails">Total:  &pound;'+parseFloat(TotalPrice).toFixed(2)+'</p></div>'
		setTimeout( function(){
			$('#CartRecent').fadeOut(1000);
		},5000);
		window.localStorage.setItem('Shopping Cart', JSON.stringify(ShoppingCart));
		window.localStorage.setItem('Shopping Cart PN', ProductNumber);
		}
	})
}

function HeaderWelcome(){
	var AccountName = document.getElementById('AccountName');
	try{
	if(localStorage.getItem('Username')){
		var UserName = localStorage.getItem('Username')
		console.log(UserName);
		AccountName.innerHTML = ' &nbsp;&nbsp; Welcome Back &nbsp;&nbsp;'+UserName+'';
		$('#LoginButton').html('&nbsp;&nbsp; Log Out');
	}
	}
	catch (e){
	}
}