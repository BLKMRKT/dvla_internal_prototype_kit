//var name = location.search.split('name=')[1];

if (member.currentManufacturer !== undefined) {
	var manufacturer = member.currentManufacturer;
	var manufacturerUsers = manufacturer.users;
	
	var retailers = manufacturer.retailers;

	var user = member.currentUser;
	
	// Manufacturer Data
	$('.manufacturer-name').html(manufacturer.name);
	$('.account-code').html(manufacturer.supplierCode);
	$('.account-type').html(manufacturer.accountType);
	$('#manufacturer-account-type').html(manufacturer.accountType);
	$('.contact-name').html(manufacturer.contact.forenames + ' ' + manufacturer.contact.surnames);
	$('.address').html(manufacturer.address1 + '<br>' + manufacturer.address2 + '<br>' + manufacturer.address3 + '<br>' + manufacturer.postCode);
	$('.phone-number').html(manufacturer.contact.phoneNumber);
	$('.email-address').html(manufacturer.contact.emailAddress);
	$('.manufacturer-phone-number').html(manufacturer.phoneNumber);
	$('.manufacturer-email-address').html(manufacturer.emailAddress);
	$('.financial-responsibility').html(manufacturer.financialResponsibility);
	$('.VAT-number').html(manufacturer.VATnumber);
	$('.setup-date').html(manufacturer.accountCreation);
	$('#manufacturer-status').html(manufacturer.accountStatus);
	
	// Manufacturer user data
	$('.user-name').html(user.forenames + ' ' + user.surnames);
	$('.user-id').html(user.id);
	$('#staff-account-type').html(user.accountType);
	$('.user-phone-number').html(user.phoneNumber);
	$('.user-email').html(user.emailAddress);
	$('.user-class').html(user.privacyClass);
	$('.user-status').html(user.accountStatus);
	$('.password-status').html(user.passwordStatus);
	$('.security-q1-answer').html(user.securityQ1);
	$('.security-q2-answer').html(user.securityQ2);
}

if (member.currentRetailer !== undefined) {
	var retailer = member.currentRetailer;
	var retailerUsers = retailer.users;
	
	// Retailer data
	$('#retailer-account-type').html(retailer.accountType);
	$('.retailer-name').html(retailer.name);
	$('.retailer-code').html(retailer.supplierCode);
}

if (user.passwordStatus === 'Locked') {
	$('.password-status').removeClass('active-marker');
	$('.password-status').addClass('locked-marker');	
}


