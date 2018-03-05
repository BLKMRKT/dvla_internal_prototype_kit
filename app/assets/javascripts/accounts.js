if (getQueryVariable('recordid')) {
    var recordid = getQueryVariable('recordid');
};

if (getQueryVariable('recordtype')) {
    var recordtype = getQueryVariable('recordtype');
    if (recordtype == 'manufacturer') { var record = getManufacturer(recordid) };
    if (recordtype == 'retailer') { var record = getRetailer(recordid) };
    if (recordtype == 'member') { var record = member.records[recordid] };
};

// Account creation

if (getQueryVariable('accountcreation')) {
    var accountcreation = getQueryVariable('accountcreation');
    if (accountcreation == "true") {
        $('#manufacturer-success').show();
        $('#retailer-success').show();
    };
};


// Creating a retailer - account data

// Page context
$('.retailer-name').html(record.name);
$('.manufacturer-name').html(record.name);
$('.manufacturer-details-tab').html('<a href="/manufacturer/details?recordtype=manufacturer&recordid='+ recordid +'">Details</a>');
$('.manufacturer-retailers-tab').html('<a href="/manufacturer/retailers?recordtype=manufacturer&recordid='+ recordid +'">Retailers</a>');

// Individual contact
//$('.contact-name').html(record.contact.title + ' ' + record.contact.forenames + ' ' + record.contact.surnames);
//$('.contact-email').html(record.contact.emailAddress);
//$('.contact-phone').html(record.contact.phoneNumber);

// Record details
$('.manufacturer-code').html(record.supplierCode);
$('.full-address').html(record.address.line1 + '<br>' + record.address.line2 + '<br>' + record.address.city + '<br>' + record.address.postCode);
$('.system-type').html(record.systemType);
$('.companies-house').html(record.companiesHouse);
$('.VAT-number').html(record.VATnumber);
$('.date-of-creation').html(record.accountCreation);
$('.contact-name').html(record.contact.name);
$('.contact-email').html(record.contact.emailAddress);
$('.contact-phone').html(record.contact.phoneNumber);

// Retailer specific details
$('.retailer-code').html(record.retailerCode);

                  
// Account actions

// Manufacturer page - create a retailer
$("#create-retailer").click(function(){
	if (member.questions === undefined) {
		member.questions = {};
	}	
	go('/account-creation/retailer-creation');
});

// Manufacturer page - create a retailer
$("#create-account").click(function(){
	if (member.questions === undefined) {
		member.questions = {};
	}	
	go('/account-creation/account-type');
});