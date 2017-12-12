var AFRL = {
	manufacturers: [
		
			// Honda Manufacturer
			{
			name: 'Honda',
			id: '928456',
			accountType: 'Manufacturer',
			address1:'123 Example Rd',
			address2:'Llansamlet',
			address3:'Swansea',
			postCode:'SA1 9JK',
			phoneNumber: '01792 220039',
			emailAddress:'admin@honda.co.uk',
			supplierCode:'BP',
			accountStatus:'Active',
			financialResponsibility:'Yes',
			VATnumber:'12013291',
			accountCreation:'1 November 2004',
			contact: {
				title: 'Dr',
				forenames:'Liam',
				surnames:'Betwsorth',
				id:'1201',
				phoneNumber:'01792 698039',
				emailAddress:'liam.betsworth@honda.co.uk',
				},
				
			// Honda Manufacturer Users
			users: [
				{
					title: 'Dr',
					forenames:'Liam',
					surnames:'Betsworth',
					accountType: 'Staff',
					id:'1201',
					phoneNumber:'01792 698039',
					emailAddress:'liam.betsworth@honda.co.uk',
					privacyClass:'Admin',
					accountStatus:'Active',
					passwordStatus:'Active',
					securityQ1: 'Jones',
					securityQ2: '182901',
				},	{
					title: 'Mrs',
					forenames:'Anne',
					surnames:'Jones',
					accountType: 'Staff',
					id:'1202',
					phoneNumber:'01792 698040',
					emailAddress:'anne.jones@honda.co.uk',
					privacyClass:'Staff',
					accountStatus:'Active',
					passwordStatus:'Locked',
					securityQ1: 'Thomas',
					securityQ2: '129910',
				}, {
					title: 'Mr',
					forenames:'Paul',
					surnames:'Mcglynn',
					accountType: 'Staff',
					id:'1203',
					phoneNumber:'01792 698041',
					emailAddress:'paul.jones@honda.co.uk',
					privacyClass:'Staff',
					accountStatus:'Active',
					passwordStatus:'Active',
					securityQ1: 'Wilks',
					securityQ2: '889320',
				},	{
					title: 'Miss',
					forenames: 'Carol',
					surnames: 'Hughes',
					accountType: 'Staff',
					id: '1204',
					phoneNumber: '01792 698042',
					emailAddress: 'carol.hughes@honda.co.uk',
					accountStatus: 'Active',
					passwordStatus:'Active',
					securityQ1: 'Haniffy',
					securityQ2: '220190',
				}, {
					title: 'Mr',
					forenames: 'Daryl',
					surnames: 'Webb',
					accountType: 'Staff',
					id: '1205',
					phoneNumber: '01792 698044',
					emailAddress: 'daryl.webb@honda.co.uk',
					privacyClass: 'Staff',
					accountStatus: 'Active',
					passwordStatus:'Active',
					securityQ1: 'Thompson',
					securityQ2: '129910',
				}, {
					title: 'Mr',
					forenames: 'Alex',
					surnames: 'Tyler',
					accountType: 'Staff',
					id: '1206',
					phoneNumber: '01792 698045',
					emailAddress: 'alex.tyler@honda.co.uk',
					privacyClass: 'Staff',
					accountStatus: 'Active',
					passwordStatus:'Active',
					securityQ1: 'Thompson',
					securityQ2: '323410',
				},
			], // End honda manufacturer users
		
			// Honda Retailers				
			retailers: [
				
				// Honda Whitchurch
				{
				name:'Honda Whitchurch',
				manufacturer:'honda',
				id: '9284',
				MVRIS:'123379',
				accountType: 'Retailer',
				address1:'10 Alexandra Rd',
				address2:'Whitchurch',
				address3:'Cardiff',
				postCode:'CF24 4QR',
				phoneNumber: '02920 698039',
				emailAddress:'honda.whitchurch@honda.co.uk',
				supplierCode:'B189',
				individualContact:'Mr Bobby Singh',
				accountStatus:'Active',
				financialResponsibility:'Yes',
				VATnumber:'12013291',
				accountCreation:'1st November 2004',
				contact: {
					title: 'Mr',
					forenames:'Bobby',
					surnames:'Singh',
					id:'1207',
					accountType: 'Staff',
					phoneNumber:'01792 698039',
					emailAddress:'bobby.signh@honda.co.uk',
					privacyClass:'Admin',
					accountStatus:'Active',
					securityQ1: 'Butterworth',
					securityQ2: '182901',	
				},
					
				// Honda Whitchurch Users	
					users: [
						{
							title: 'Mr',
							forenames:'Bobby',
							surnames:'Singh',
							id:'1207',
							accountType: 'Staff',
							phoneNumber:'01792 698039',
							emailAddress:'bobby.singh@honda.co.uk',
							privacyClass:'Admin',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Jones',
							securityQ2: '992001',
						},	{
							title: 'Mrs',
							forenames:'Lisa',
							surnames:'Rees',
							id:'1208',
							accountType: 'Staff',
							phoneNumber:'01792 698040',
							emailAddress:'lisa.rees@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Thomas',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames:'Steven',
							surnames:'James',
							id:'1209',
							accountType: 'Staff',
							phoneNumber:'01792 698041',
							emailAddress:'steve.james@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Wilks',
							securityQ2: '889320',
						},	{
							title: 'Mr',
							forenames: 'Scott',
							surnames: 'Redford',
							id: '1210',
							accountType: 'Staff',
							phoneNumber: '01792 698042',
							emailAddress: 'scott.redford@honda.co.uk',
							privacyClass: 'Admin',
							accountStatus: 'Active',
							passwordStatus:'Locked',
							securityQ1: 'Haniffy',
							securityQ2: '220190',
						}, {
							title: 'Mr',
							forenames: 'Daryl',
							surnames: 'Webb',
							id: '1211',
							accountType: 'Staff',
							phoneNumber: '01792 698044',
							emailAddress: 'daryl.webb@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames: 'Alex',
							surnames: 'Tyler',
							id: '1212',
							accountType: 'Staff',
							phoneNumber: '01792 698045',
							emailAddress: 'alex.tyler@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '323410',
						},	{
							title: 'Mrs',
							forenames:'Anne',
							surnames:'Jones',
							id:'1213',
							accountType: 'Staff',
							phoneNumber:'01792 698040',
							emailAddress:'anne.jones@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Locked',
							securityQ1: 'Thomas',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames:'Paul',
							surnames:'Mcglynn',
							id:'1214',
							accountType: 'Staff',
							phoneNumber:'01792 698041',
							emailAddress:'paul.jones@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Wilks',
							securityQ2: '889320',
						},	{
							title: 'Miss',
							forenames: 'Carol',
							surnames: 'Hughes',
							id: '1215',
							accountType: 'Staff',
							phoneNumber: '01792 698042',
							emailAddress: 'carol.hughes@honda.co.uk',
							privacyClass: 'Admin',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Haniffy',
							securityQ2: '220190',
						}, {
							title: 'Mr',
							forenames: 'Daryl',
							surnames: 'Webb',
							id: '1216',
							accountType: 'Staff',
							phoneNumber: '01792 698044',
							emailAddress: 'daryl.webb@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames: 'Alex',
							surnames: 'Tyler',
							id: '1217',
							accountType: 'Staff',
							phoneNumber: '01792 698045',
							emailAddress: 'alex.tyler@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '323410',
						},
					],	// End honda whitchurch users	
				}, // End Honda Whitchurch
				
				// Honda Swansea
				{
					name:'Honda Swansea',
					manufacturer:'honda',
					id: '1009',
					MVRIS:'291012',
					accountType: 'Retailer',
					address1:'291 Kingston Rd',
					address2:'Richmond',
					address3:'London',
					postCode:'LN91 8KW',
					phoneNumber: '02920 698039',
					emailAddress:'honda.whitchurch@honda.co.uk',
					supplierCode:'B189',
					individualContact:'Mr Bobby Singh',
					accountStatus:'Active',
					financialResponsibility:'Yes',
					VATnumber:'12013291',
					accountCreation:'1st November 2004',
					contact: {
						title: 'Mrs',
						forenames:'Lisa',
						surnames:'Rees',
						id:'1220',
						accountType: 'Staff',
						phoneNumber:'01792 698040',
						emailAddress:'Lisa.Rees@honda.co.uk',
						privacyClass:'Staff',
						accountStatus:'Active',
						passwordStatus:'Locked',
						securityQ1: 'Thomas',
						securityQ2: '129910',
					},

					// Honda Whitchurch Users	
					users: [
						{
							title: 'Mr',
							forenames:'Bobby',
							surnames:'Singh',
							id:'1219',
							accountType: 'Staff',
							phoneNumber:'01792 698039',
							emailAddress:'bobby.signh@honda.co.uk',
							privacyClass:'Admin',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Jones',
							securityQ2: '992001',
						},	{
							title: 'Mrs',
							forenames:'Lisa',
							surnames:'Rees',
							id:'1220',
							accountType: 'Staff',
							phoneNumber:'01792 698040',
							emailAddress:'Lisa.Rees@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Locked',
							securityQ1: 'Thomas',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames:'Steven',
							surnames:'James',
							id:'1221',
							accountType: 'Staff',
							phoneNumber:'01792 698041',
							emailAddress:'steven.james@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Wilks',
							securityQ2: '889320',
						},	{
							title: 'Mr',
							forenames: 'Scott',
							surnames: 'Redford',
							id: '1222',
							accountType: 'Staff',
							phoneNumber: '01792 698042',
							emailAddress: 'carol.hughes@honda.co.uk',
							privacyClass: 'Admin',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Haniffy',
							securityQ2: '220190',
						}, {
							title: 'Mr',
							forenames: 'Daryl',
							surnames: 'Webb',
							id: '1223',
							accountType: 'Staff',
							phoneNumber: '01792 698044',
							emailAddress: 'daryl.webb@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames: 'Alex',
							surnames: 'Tyler',
							id: '1224',
							accountType: 'Staff',
							phoneNumber: '01792 698045',
							emailAddress: 'alex.tyler@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '323410',
						},	{
							title: 'Mrs',
							forenames:'Anne',
							surnames:'Jones',
							id:'1225',
							accountType: 'Staff',
							phoneNumber:'01792 698040',
							emailAddress:'anne.jones@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Thomas',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames:'Paul',
							surnames:'Mcglynn',
							id:'1226',
							accountType: 'Staff',
							phoneNumber:'01792 698041',
							emailAddress:'paul.jones@honda.co.uk',
							privacyClass:'Staff',
							accountStatus:'Active',
							passwordStatus:'Active',
							securityQ1: 'Wilks',
							securityQ2: '889320',
						},	{
							title: 'Miss',
							forenames: 'Carol',
							surnames: 'Hughes',
							id: '1227',
							accountType: 'Staff',
							phoneNumber: '01792 698042',
							emailAddress: 'carol.hughes@honda.co.uk',
							privacyClass: 'Admin',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Haniffy',
							securityQ2: '220190',
						}, {
							title: 'Mr',
							forenames: 'Daryl',
							surnames: 'Webb',
							id: '1228',
							accountType: 'Staff',
							phoneNumber: '01792 698044',
							emailAddress: 'daryl.webb@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '129910',
						}, {
							title: 'Mr',
							forenames: 'Alex',
							surnames: 'Tyler',
							id: '1229',
							accountType: 'Staff',
							phoneNumber: '01792 698045',
							emailAddress: 'alex.tyler@honda.co.uk',
							privacyClass: 'Staff',
							accountStatus: 'Active',
							passwordStatus:'Active',
							securityQ1: 'Thompson',
							securityQ2: '323410',
						},
					],	// End honda whitchurch users	
				}, // End Honda Swansea
		
			], // End Honda retailers
		}, // End Honda
		
	
			// Bentley Manufacturer
			{
			name:'Bentley',
			id:'199012',
			accountType: 'Manufacturer',
			address1:'21, Newport Rd',
			address2:'Cathays',
			address3:'Glasgow',
			postCode:'GL19 HKJ',
			phoneNumber:'19029 698039',
			emailAddress:'admin@bentley',
			supplierCode:'LK',
			individualContact:'Mr Carl Tyler',
			accountStatus:'Active',
			financialResponsibility:'Yes',
			VATnumber:'18021561',
			accountCreation:'17 January 2001',
			contact: {
				title: 'Mr',
				forenames:'Carl',
				surnames:'Tyler',
				id:'1230',
				phoneNumber:'19029 698040',
				emailAddress:'carl.tyler@bentley.com',
			},

			// Honda Manufacturer Users
			users: [
			{
			title: 'Dr',
			forenames:'Liam',
			surnames:'Betwsorth',
			id:'1231',
			accountType: 'Staff',
			phoneNumber:'01792 698039',
			emailAddress:'liam.betsworth@bentley.com',
			privacyClass:'Admin',
			accountStatus:'Active',
			securityQ1: 'Jones',
			securityQ2: '182901',
			},	{
			title: 'Mrs',
			forenames:'Anne',
			surnames:'Jones',
			id:'1232',
			accountType: 'Staff',
			phoneNumber:'01792 698040',
			emailAddress:'anne.jones@bentley.com',
			privacyClass:'Staff',
			accountStatus:'Active',
			securityQ1: 'Thomas',
			securityQ2: '129910',
			}, {
			title: 'Mr',
			forenames:'Paul',
			surnames:'Mcglynn',
			id:'1233',
			accountType: 'Staff',
			phoneNumber:'01792 698041',
			emailAddress:'paul.jones@bentley.com',
			privacyClass:'Staff',
			accountStatus:'Active',
			securityQ1: 'Wilks',
			securityQ2: '889320',
			},	{
			title: 'Miss',
			forenames: 'Carol',
			surnames: 'Hughes',
			id: '1234',		
			accountType: 'Staff',
			phoneNumber: '01792 698042',
			emailAddress: 'carol.hughes@bentley.com',
			privacyClass: 'Admin',
			accountStatus: 'Active',
			securityQ1: 'Haniffy',
			securityQ2: '220190',
			}, {
			title: 'Mr',
			forenames: 'Daryl',
			surnames: 'Webb',
			id: '1235',
			accountType: 'Staff',
			phoneNumber: '01792 698044',
			emailAddress: 'daryl.webb@bentley.com',
			privacyClass: 'Staff',
			accountStatus: 'Active',
			securityQ1: 'Thompson',
			securityQ2: '129910',
			}, {
			title: 'Mr',
			forenames: 'Alex',
			surnames: 'Tyler',
			id: '1236',
			accountType: 'Staff',
			phoneNumber: '01792 698045',
			emailAddress: 'alex.tyler@bentley.com',
			privacyClass: 'Staff',
			accountStatus: 'Active',
			securityQ1: 'Thompson',
			securityQ2: '323410',
			},
		], // End honda manufacturer users


		// Honda Retailers				
		retailers: [

			// Honda Whitchurch
			{
				name:'Bentley Newport',
				manufacturer:'Bentley',
				id: '9284',
				MVRIS:'123379',
				accountType: 'Retailer',
				address1:'10 Alexandra Rd',
				address2:'Whitchurch',
				address3:'Cardiff',
				postCode:'CF24 4QR',
				phoneNumber: '02920 698039',
				emailAddress:'honda.whitchurch@',
				supplierCode:'B189',
				individualContact:'Mr Bobby Singh',
				accountStatus:'Active',
				financialResponsibility:'Yes',
				VATnumber:'12013291',
				accountCreation:'1st November 2004',
				contact: {
					title: 'Mr',
					forenames:'Charles',
					surnames:'Orme',
					id:'1237',
					accountType: 'Staff',
					phoneNumber:'01792 698039',
					emailAddress:'charls.orme@honda.com',
					privacyClass:'Admin',
					accountStatus:'Active',
					securityQ1: 'Butterworth',
					securityQ2: '182901',	
				},

				// Honda Whitchurch Users	
				users: [
					{
						title: 'Mr',
						forenames:'Test',
						surnames:'Test',
						id:'1238',
						accountType: 'Staff',
						phoneNumber:'01792 698039',
						emailAddress:'bobby.signh@',
						privacyClass:'Admin',
						accountStatus:'Active',
						securityQ1: 'Jones',
						securityQ2: '992001',
					},	{
						title: 'Mrs',
						forenames:'Lisa',
						surnames:'Rees',
						id:'1239',
						accountType: 'Staff',
						phoneNumber:'01792 698040',
						emailAddress:'Lisa.Rees@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Thomas',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames:'Steven',
						surnames:'James',
						id:'1240',
						accountType: 'Staff',
						phoneNumber:'01792 698041',
						emailAddress:'paul.jones@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Wilks',
						securityQ2: '889320',
					},	{
						title: 'Mr',
						forenames: 'Scott',
						surnames: 'Redford',
						id: '1241',
						accountType: 'Staff',
						phoneNumber: '01792 698042',
						emailAddress: 'carol.hughes@',
						privacyClass: 'Admin',
						accountStatus: 'Locked',
						securityQ1: 'Haniffy',
						securityQ2: '220190',
					}, {
						title: 'Mr',
						forenames: 'Daryl',
						surnames: 'Webb',
						id: '1242',
						accountType: 'Staff',
						phoneNumber: '01792 698044',
						emailAddress: 'daryl.webb@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames: 'Alex',
						surnames: 'Tyler',
						id: '1243',
						accountType: 'Staff',
						phoneNumber: '01792 698045',
						emailAddress: 'alex.tyler@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '323410',
					},	{
						title: 'Mrs',
						forenames:'Anne',
						surnames:'Jones',
						id:'1244',
						accountType: 'Staff',
						phoneNumber:'01792 698040',
						emailAddress:'anne.jones@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Thomas',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames:'Paul',
						surnames:'Mcglynn',
						id:'1245',
						accountType: 'Staff',
						phoneNumber:'01792 698041',
						emailAddress:'paul.jones@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Wilks',
						securityQ2: '889320',
					},	{
						title: 'Miss',
						forenames: 'Carol',
						surnames: 'Hughes',
						id: '1246',
						accountType: 'Staff',
						phoneNumber: '01792 698042',
						emailAddress: 'carol.hughes@',
						privacyClass: 'Admin',
						accountStatus: 'Active',
						securityQ1: 'Haniffy',
						securityQ2: '220190',
					}, {
						title: 'Mr',
						forenames: 'Daryl',
						surnames: 'Webb',
						id: '1247',
						accountType: 'Staff',
						phoneNumber: '01792 698044',
						emailAddress: 'daryl.webb@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames: 'Alex',
						surnames: 'Tyler',
						id: '1248',
						accountType: 'Staff',
						phoneNumber: '01792 698045',
						emailAddress: 'alex.tyler@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '323410',
					},
				],	// End Bentley newport users	
			}, // End Bentley Newport


			// Bentley Swansea
			{
				name:'Bentley Glasgow',
				manufacturer:'honda',
			 	id: '9284',
				MVRIS:'123379',
				accountType: 'Retailer',
				address1:'144 Queen Rd',
				address2:'Dovery',
				address3:'Glasgow',
				postCode:'GL20 1KL',
				phoneNumber: '02920 698039',
				emailAddress:'honda.whitchurch@',
				supplierCode:'B189',
				individualContact:'Mr Bobby Singh',
				accountStatus:'Active',
				financialResponsibility:'Yes',
				VATnumber:'12013291',
				accountCreation:'1st November 2004',
				contact: {
					title: 'Mr',
					forenames:'Josh',
					surnames:'Willis',
					id:'1249',
					accountType: 'Staff',
					phoneNumber:'01792 698039',
					emailAddress:'bobby.signh@',
					privacyClass:'Admin',
					accountStatus:'Active',
					securityQ1: 'Butterworth',
					securityQ2: '182901',	
				},

				// Honda Whitchurch Users	
				users: [
					{
						title: 'Mr',
						forenames:'Bobby',
						surnames:'Singh',
						id:'1250',
						accountType: 'Staff',
						phoneNumber:'01792 698039',
						emailAddress:'bobby.signh@',
						privacyClass:'Admin',
						accountStatus:'Active',
						securityQ1: 'Jones',
						securityQ2: '992001',
					},	{
						title: 'Mrs',
						forenames:'Lisa',
						surnames:'Rees',
						id:'1251',
						accountType: 'Staff',
						phoneNumber:'01792 698040',
						emailAddress:'Lisa.Rees@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Thomas',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames:'Steven',
						surnames:'James',
						id:'1252',
						accountType: 'Staff',
						phoneNumber:'01792 698041',
						emailAddress:'paul.jones@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Wilks',
						securityQ2: '889320',
					},	{
						title: 'Mr',
						forenames: 'Scott',
						surnames: 'Redford',
						id: '1253',
						accountType: 'Staff',
						phoneNumber: '01792 698042',
						emailAddress: 'carol.hughes@',
						privacyClass: 'Admin',
						accountStatus: 'Active',
						securityQ1: 'Haniffy',
						securityQ2: '220190',
					}, {
						title: 'Mr',
						forenames: 'Daryl',
						surnames: 'Webb',
						id: '1254',
						accountType: 'Staff',
						phoneNumber: '01792 698044',
						emailAddress: 'daryl.webb@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames: 'Alex',
						surnames: 'Tyler',
						id: '1255',
						accountType: 'Staff',
						phoneNumber: '01792 698045',
						emailAddress: 'alex.tyler@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '323410',
					},	{
						title: 'Mrs',
						forenames:'Anne',
						surnames:'Jones',
						id:'1256',
						accountType: 'Staff',
						phoneNumber:'01792 698040',
						emailAddress:'anne.jones@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Thomas',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames:'Paul',
						surnames:'Mcglynn',
						id:'1257',
						accountType: 'Staff',
						phoneNumber:'01792 698041',
						emailAddress:'paul.jones@',
						privacyClass:'Staff',
						accountStatus:'Active',
						securityQ1: 'Wilks',
						securityQ2: '889320',
					},	{
						title: 'Miss',
						forenames: 'Carol',
						surnames: 'Hughes',
						id: '1258',
						accountType: 'Staff',
						phoneNumber: '01792 698042',
						emailAddress: 'carol.hughes@',
						privacyClass: 'Admin',
						accountStatus: 'Active',
						securityQ1: 'Haniffy',
						securityQ2: '220190',
					}, {
						title: 'Mr',
						forenames: 'Daryl',
						surnames: 'Webb',
						id: '1259',
						accountType: 'Staff',
						phoneNumber: '01792 698044',
						emailAddress: 'daryl.webb@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '129910',
					}, {
						title: 'Mr',
						forenames: 'Alex',
						surnames: 'Tyler',
						id: '1260',
						accountType: 'Staff',
						phoneNumber: '01792 698045',
						emailAddress: 'alex.tyler@',
						privacyClass: 'Staff',
						accountStatus: 'Active',
						securityQ1: 'Thompson',
						securityQ2: '323410',
					},
				],	// End honda whitchurch users	
			}, // End Honda Swansea



		] // End Honda retailers
	} // End Bentley

	] // End Manufacturers
} // End variable


// Get manufacturer by name
function getManufacturer(manufacturerName) {
	for (var i = 0; i < AFRL.manufacturers.length; i++) {
		if (AFRL.manufacturers[i].name === manufacturerName) {
			return AFRL.manufacturers[i];
		}
	}
}

// Get manufacturer user by id
function getUser(userID) {
	for (var i = 0; i < AFRL.manufacturers.length; i++) {
		for (var j = 0; j < AFRL.manufacturers[i].users.length; j++) {
			if (AFRL.manufacturers[i].users[j].id == userID) {
				return AFRL.manufacturers[i].users[j];
			}
		}
		
		for (var k = 0; k < AFRL.manufacturers[i].retailers.length; k++) {
			for (var m = 0; m < AFRL.manufacturers[i].retailers[k].users.length; m++) {
				if (AFRL.manufacturers[i].retailers[k].users[m].id == userID) {
					return AFRL.manufacturers[i].retailers[k].users[m];
				}
			}
		}
	}

}

// Get retailer by id
function getRetailer(retailerID) {
	for (var i = 0; i < AFRL.manufacturers.length; i++) {
		for (var k = 0; k < AFRL.manufacturers[i].retailers.length; k++) {
			
				if (AFRL.manufacturers[i].retailers[k].id == retailerID) {
					return AFRL.manufacturers[i].retailers[k];
				}
			
		}
	}

}

// Manufacturers table v1

//var manufacturers = AFRL.manufacturers;
//
//var manufacturerName1 = AFRL.manufacturers[0].name;
//var manufacturerName2 = AFRL.manufacturers[1].name;
//
//var table = '';
//
//for (var i = 0; i < manufacturers.length; i++) {
//	table += '<tr>';
//	table += '<td class="bold"><a class="manufacturers-link" data-manufacturer="' + manufacturers[i].name + '" href="#">' + manufacturers[i].name + '</a></td>';
//	table += '<td>' + manufacturers[i].supplierCode + '</td>';
//
//	table += '<td><div class="truncate">' + manufacturers[i].address1 + ', ' + manufacturers[i].address2 + ', ' +  manufacturers[i].address3 + '</div></td>';
//	table += '<td>' + manufacturers[i].postCode + '</div></td>';
//	table += '<td><a href="">' + manufacturers[i].contact.forenames + ' ' + manufacturers[i].contact.surnames + '</a></td>';
//	table += '</tr>';
//}
//
//$('#tableBody').html(table);
//
//$('.manufacturers-link').click(function(){		
//	var name = $(this).attr("data-manufacturer");
//	member.currentManufacturer = getManufacturer(name);
//	go('/manufacturer/details');
//
//});

