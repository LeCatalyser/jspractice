/*var state = {
    items: [],
    groceryStores: [
    	"Target",
    	"Walmart",
    	"Sams' Club"
    ]
};*/

//MVC=model view controller pattern. Way to organize apps.

// Model
var state = {
	items: []
};


// Controller

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};


// View functions

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};

// Event listeners
$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});


// eli's less good verison of that

// $('.shopping-list-add').submit(function(event) {
//     event.preventDefault();
//     state.items.push($('.shopping-list-add-input').val());
//     var itemsHTML = state.items.map(function(item) {
//         return '<li>' + item + '</li>';
//     });
//     $('.shopping-list').html(itemsHTML);
// });
