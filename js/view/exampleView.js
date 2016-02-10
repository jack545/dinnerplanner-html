//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	

	//Number of Guests
	this.numberOfGuests.html(model.getNumberOfGuests());


	// CONTROLER STUFF FORGETABOUTIT
	/*
	this.plusButton.click({nbGuests:this.numberOfGuests}, increaseGuests);
	this.minusButton.click({nbGuests:this.numberOfGuests}, decreaseGuests);

	function increaseGuests(event){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		event.data.nbGuests.html(model.getNumberOfGuests());
	}

	function decreaseGuests(event){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		event.data.nbGuests.html(model.getNumberOfGuests());
	}*/

	function loadMainDishes(){
		dishContainer = container.find("#dishContainer");
		mainDishes = model.getAllDishes("main dish");

		var dishHtml = "";

		for(dish in mainDishes){
			dishHtml = '<div class="dish"><div class="dish-img">';
			dishHtml += '<img src="'+dish.image+'" alt="'+dish.name+'">';
			dishHtml += '<p>'+dis.name+'</p></div>':
			dishHtml += '<div class="description"><p>'+dish.description+'</p></div></div>';

			dishContainer.append(dishHtml);
		}

	}
	


}
 
