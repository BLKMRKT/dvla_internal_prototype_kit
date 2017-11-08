//var name = location.search.split('name=')[1];

if (member.currentManufacturer !== undefined) {
	var manufacturer = member.currentManufacturer;
	var retailers = manufacturer.retailers;

	$(document).ready(function() {
		$('.account-name').html(manufacturer.name);
		$('.account-code').html('(' + manufacturer.id + ')');
	});
} 


// Retailer list

