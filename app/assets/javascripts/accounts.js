var accountcreation = location.search.split('accountcreation=')[1];


// Account creation

if (accountcreation == "true") {
	$('#manufacturer-success').show();
}

if (accountcreation == "true") {
	$('#retailer-success').show();
}

// Account actions

$("#create-retailer").click(function(){
	go('/account-creation/retailer-creation');
});

$("#create-account").click(function(){
	go('/account-creation/account-type');
});



if (member.currentManufacturer !== undefined) {
	
	var manufacturer = member.currentManufacturer;
	var manufacturerUsers = manufacturer.users;	
	var retailers = manufacturer.retailers;
	var user = member.currentUser;
	
	// Manufacturer Data
//	$('.manufacturer-name').html(manufacturer.name);
//	$('.account-code').html(manufacturer.supplierCode);
//	$('.account-type').html(manufacturer.accountType);
//	$('#manufacturer-account-type').html(manufacturer.accountType);
//	$('.contact-name').html(manufacturer.contact.forenames + ' ' + manufacturer.contact.surnames);
//	$('.address').html(manufacturer.address1 + '<br>' + manufacturer.address2 + '<br>' + manufacturer.address3 + '<br>' + manufacturer.postCode);
//	$('.phone-number').html(manufacturer.contact.phoneNumber);
//	$('.email-address').html(manufacturer.contact.emailAddress);
//	$('.manufacturer-phone-number').html(manufacturer.phoneNumber);
//	$('.manufacturer-email-address').html(manufacturer.emailAddress);
//	$('.financial-responsibility').html(manufacturer.financialResponsibility);
//	$('.VAT-number').html(manufacturer.VATnumber);
//	$('.setup-date').html(manufacturer.accountCreation);
//	$('#manufacturer-status').html(manufacturer.accountStatus);
//	
//	// Manufacturer user data
//	$('.user-name').html(user.forenames + ' ' + user.surnames);
//	$('.user-id').html(user.id);
//	$('#staff-account-type').html(user.accountType);
//	$('.user-phone-number').html(user.phoneNumber);
//	$('.user-email').html(user.emailAddress);
//	$('.user-class').html(user.privacyClass);
//	$('.user-status').html(user.accountStatus);
//	$('.password-status').html(user.passwordStatus);
//	$('.security-q1-answer').html(user.securityQ1);
//	$('.security-q2-answer').html(user.securityQ2);
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


	// Creating a retailer - account data

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





