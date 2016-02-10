//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	

	//Number of Guests
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton.click({nbGuests:this.numberOfGuests}, increaseGuests);
	this.minusButton.click({nbGuests:this.numberOfGuests}, decreaseGuests);

	function increaseGuests(event){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		event.data.nbGuests.html(model.getNumberOfGuests());
	}

	function decreaseGuests(event){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		event.data.nbGuests.html(model.getNumberOfGuests());
	}
	

	
}
 
