var AFRL = {
	manufacturers: [
		{
			name: 'Jaguar',
			id: '928456',
			accountType: 'Manufacturer',
			email:'liam.betsworth@honda.co.uk',
			address: {
				line1: '123 Example Rd',
				line2: 'Llansamlet',
				line3: '',
				city: 'Swansea',
				postCode: 'SA1 9JK'
			},
			phoneNumber: '01792 220039',
			supplierCode: 'BP',
			systemType: 'CO-OP',
			accountStatus: 'Active',
			accountCreation: '1 November 2004',
			contact: {
				title: 'Dr',
				forenames: 'Liam',
				surnames: 'Betsworth',
				id: '1201',
				phoneNumber: '01792 698039',
				emailAddress: 'liam.betsworth@honda.co.uk',
			},
			retailers: [
				'9284'
			],
			users: [
				'6543'
			]
		}, // End of Jaguar Manufacturer
		{
		name: 'Landrover',
		id: '192101',
		accountType: 'Manufacturer',
		address: {
		line1: '10 North Rd',
		line2: 'Llandaff',
		line3: '',
		city: 'Cardiff',
		postCode: 'CF24 PLK'
		},

		supplierCode: 'KL',
		systemType: 'CO-OP',
		accountStatus: 'Active',
		financialResponsibility: 'Yes',
		VATnumber: '12013291',
		accountCreation: '1 November 2004',
		contact: {
		title: 'Mr',
		forenames: 'Jay',
		surnames: 'Price',
		id: '1201',
		phoneNumber: '01792 698039',
		emailAddress: 'jay.price@honda.co.uk',
		},
		retailers: [
		'9284'
	],
	users: [
		'6543'
	]
	} // End of Bentley Manufacturer
	], // End of Manufacturers
	retailers: [
		{
			name: 'FRF Motors',
			id: '9284',
			accountType: 'Retailer',
			address: {
				line1: '10 Alexandra Rd',
				line2: 'Whitchurch',
				line3: '',
				city: 'Cardiff',
				postCode: 'CF24 4QR'
			},
			phoneNumber: '02920 698039',
			emailAddress: 'honda.whitchurch@honda.co.uk',
			retailerCode: 'B189',
			accountStatus: 'Active',
			financialResponsibility: 'Yes',
			VATnumber: '12013291',
			accountCreation: '1st November 2004',
			contact: {
				title: 'Mr',
				forenames: 'Bobby',
				surnames: 'Singh',
				id: '1207',
				accountType: 'Staff',
				phoneNumber: '01792 698039',
				emailAddress: 'bobby.signh@honda.co.uk',
				privacyClass: 'Admin',
				accountStatus: 'Active',
				securityQ1: 'Butterworth',
				securityQ2: '182901'
			},
			manufacturers: [
				'928456',
                '192101'
			],
			users: [
				'6543',
				'26543'
			]
		}
	],
	users: [
		{
			id: '6543',
			name: 'Jay Price',
			phoneNumber: '01792 830857'
		},
		{
			id: '26543',
			name: 'Liam Price',
			phoneNumber: '01792 832257'
		}
	]
};


// Get manufacturer by ID
function getManufacturer(manufacturerID) {
	for (var i = 0; i < AFRL.manufacturers.length; i++) {
		if (AFRL.manufacturers[i].id == manufacturerID) {
			return AFRL.manufacturers[i];
		}
	}
}

// Get manufacturer user by ID
function getUser(userID) {
	for (var i = 0; i < AFRL.users.length; i++) {
		if (AFRL.users[i].id == userID) {
			return AFRL.users[i];
		}
	}
}

// Get retailer by ID
function getRetailer(retailerID) {
	for (var i = 0; i < AFRL.retailers.length; i++) {
		if (AFRL.retailers[i].id == retailerID) {
			return AFRL.retailers[i];
		}
	}
}

// Get users of a manufacturer
function getManufacturerUsers(manufacturer) {
	return manufacturer.users.map(function(userID) {
		return getUser(userID);
	});
}

// Get retailers of a manufacturer
function getManufacturerRetailers(manufacturer) {
	return manufacturer.retailers.map(function(retailerID) {
		return getRetailer(retailerID);
	});
}

// Get users of a retailer
function getRetailerUsers(retailer) {
	return retailer.users.map(function(userID) {
		return getUser(userID);
	});
}

// Get manufacturers of a retailer
function getRetailerManufacturers(retailer) {
	return retailer.manufacturers.map(function(manufacturerID) {
		return getManufacturer(manufacturerID);
	});
}

