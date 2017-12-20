var accountcreation = location.search.split('accountcreation=')[1];


// Account creation

if (accountcreation == "true") {
	$('#manufacturer-success').show();
}

if (accountcreation == "true") {
	$('#retailer-success').show();
}

// Account actions

// Manufacturer page - create a reatiler
$("#create-retailer").click(function(){
	if (member.questions === undefined) {
		member.questions = {};
	}	
	go('/account-creation/retailer-creation');
});

// Manufacturer page - create a reatiler
$("#create-account").click(function(){
	if (member.questions === undefined) {
		member.questions = {};
	}	
	go('/account-creation/account-type');
});



if (member.currentManufacturer !== undefined) {
	
	var manufacturer = member.currentManufacturer;
	var manufacturerUsers = manufacturer.users;	
	var retailers = manufacturer.retailers;
	var user = member.currentUser;
	
}

	// Creating a retailer - account data

	// Page context
	$('.retailer-name').html(member.questions.retailer);

	// Individual contact
	$('.contact-name').html(member.questions.contactName);
	$('.contact-email').html(member.questions.contactEmail);
	$('.contact-phone').html(member.questions.contactPhone);
	$('.contact-fax').html(member.questions.contactFax);
	
	// Retailer details
	$('.retailer-name').html(member.questions.retailer);
	$('.MVRIS-code').html(member.questions.mvrisCode);
	$('.dealer-code').html(member.questions.dealerCode);
	$('.full-address').html(member.questions.address1 + '<br>' + member.questions.address2 + '<br>' + member.questions.address3 + '<br>' + member.questions.postcode);
	$('.system-type').html(member.questions.systemType);
	$('.companies-house').html(member.questions.companiesHouse);
	$('.VAT-number').html(member.questions.vatNumber);
	$('.date-of-creation').html(member.questions.dateOfCreation);	

	// Manufacturer details
	$('.manufacturer-name').html(member.questions.manufacturer);
	$('.supplier-code').html(member.questions.supplierCode);
	$('.full-address').html(member.questions.address1 + '<br>' + member.questions.address2 + '<br>' + member.questions.address3 + '<br>' + member.questions.postcode);


	// Page context
	$('.retailer-name').html(member.questions.retailer);



//if (member.currentRetailer !== undefined) {
//	var retailer = member.currentRetailer;
//	var retailerUsers = retailer.users;
//	
//	// Retailer data
//	$('#retailer-account-type').html(retailer.accountType);
//	$('.retailer-name').html(retailer.name);
//	$('.retailer-code').html(retailer.supplierCode);
//}


// Account status 

//if (user.passwordStatus === 'Locked') {
//	$('.password-status').removeClass('active-marker');
//	$('.password-status').addClass('locked-marker');	
//}





