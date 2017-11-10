//var name = location.search.split('name=')[1];

if (member.currentManufacturer !== undefined) {
	var manufacturer = member.currentManufacturer;
	var retailers = manufacturer.retailers;
	var manufacturerUsers = manufacturer.users;
	var currentUser = member.currentUser;

	$('.account-name').html(manufacturer.name);
	$('.account-code').html(manufacturer.supplierCode);
	$('.account-type').html(manufacturer.accountType);
	$('.contact-name').html(manufacturer.contact.forenames + ' ' + manufacturer.contact.surnames);
	$('.address').html(manufacturer.address1 + '<br>' + manufacturer.address2 + '<br>' + manufacturer.address3 + '<br>' + manufacturer.postCode);
	$('.phone-number').html(manufacturer.contact.phoneNumber);
	$('.email-address').html(manufacturer.contact.emailAddress);
	$('.manufacturer-phone-number').html(manufacturer.phoneNumber);
	$('.manufacturer-email-address').html(manufacturer.emailAddress);
	$('.financial-responsibility').html(manufacturer.financialResponsibility);
	$('.VAT-number').html(manufacturer.VATnumber);
	$('.setup-date').html(manufacturer.accountCreation);
	
	$('.user-name').html(currentUser);
	
}

