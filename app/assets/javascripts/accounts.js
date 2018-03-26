if (getQueryVariable('recordid')) {
    var recordid = getQueryVariable('recordid');
};

// Actions to set page variables to render from either the data schema or from a member record
if (getQueryVariable('recordtype')) {
    var recordtype = getQueryVariable('recordtype');
    if (recordtype == 'manufacturer') { var record = getManufacturer(recordid) };
    if (recordtype == 'retailer') { var record = getRetailer(recordid) };
    if (recordtype == 'member') {
        var record = member.records[recordid];
    };    
    member.currentRecord = record;
    var array = member.currentRecord.manufacturers;

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
$('.retailer-name').html(member.currentRecord.name);
try { $('.manufacturer-name').html(record.name) } catch (err) {};
try { $('.manufacturer-details-tab').html('<a href="/manufacturer/details?recordtype=manufacturer&recordid='+ recordid +'">Details</a>') } catch (err) {};
try { $('.manufacturer-retailers-tab').html('<a href="/manufacturer/retailers?recordtype=manufacturer&recordid='+ recordid +'">Retailers</a>') } catch (err) {};

// Individual contact
//$('.contact-name').html(record.contact.title + ' ' + record.contact.forenames + ' ' + record.contact.surnames);
//$('.contact-email').html(record.contact.emailAddress);
//$('.contact-phone').html(record.contact.phoneNumber);

// Record details
try { $('.manufacturer-code').html(member.currentRecord.supplierCode) } catch (err) {};
try { $('.full-address').html(member.currentRecord.address.line1 + '<br>' + member.currentRecord.address.line2 + '<br>' + member.currentRecord.address.city + '<br>' + member.currentRecord.address.postCode) } catch (err) {};
try { $('.system-type').html(member.currentRecord.systemType) } catch (err) {};
try { $('.companies-house').html(member.currentRecord.companiesHouse) } catch (err) {};
try { $('.VAT-number').html(member.currentRecord.VATnumber) } catch (err) {};
try { $('.date-of-creation').html(member.currentRecord.accountCreation) } catch (err) {};
try { $('.contact-name').html(member.currentRecord.contact.name) } catch (err) {};
try { $('.contact-email').html(member.currentRecord.contact.emailAddress) } catch (err) {};
try { $('.contact-phone').html(member.currentRecord.contact.phoneNumber) } catch (err) {};

// Retailer specific details
try { $('.retailer-code').html(member.currentRecord.retailerCode) } catch (err) {};

                  
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