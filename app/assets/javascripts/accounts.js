var name = location.search.split('name=')[1];

var manufacturer = getManufacturer(name);

$(document).ready(function() {
	$('.account-name').html(manufacturer.name);
	$('.account-code').html('(' + manufacturer.id + ')');
});


