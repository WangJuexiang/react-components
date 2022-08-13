const initState = {
	browserItems: [
		{
			id: '001',
			//form:true-physical,false-virtual
			form: true,
			//status:true-idle, false-building
			status: true,
			//isPopupShowing:true-visible, false-invisible
			isPopupShowing: false,
			ip: "192.168.1.101",
			url: "bjstdmngbgr01.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			//["Chrome,"Firefox","Safari","Ubuntu"]
			browserIcons: ['Chrome', 'Firefox', 'Safari', 'Ubuntu'],
		},

		{
			id: '002',
			//form:true-physical,false-virtual
			form: true,
			//status:true-idle, false-building
			status: true,
			//isPopupShowing:true-visible, false-invisible
			isPopupShowing: false,
			ip: "192.168.1.102",
			url: "bjstdmngbgr02.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			//["Chrome,"Firefox","Safari","Ubuntu"]
			// browserIcons: ['Chrome', 'Firefox', 'Safari', 'Ubuntu'],
		},

		{
			id: '003',
			//form:true-physical,false-virtual
			form: false,
			//status:true-idle, false-building
			status: false,
			//isPopupShowing:true-visible, false-invisible
			isPopupShowing: false,
			ip: "192.168.1.103",
			url: "bjstdmngbgr03.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			//["Chrome,"Firefox","Safari","Ubuntu"]
			// browserIcons: ['Chrome', 'Firefox', 'Safari', 'Ubuntu'],
		},

		{
			id: '004',
			//form:true-physical,false-virtual
			form: false,
			//status:true-idle, false-building
			status: false,
			//isPopupShowing:true-visible, false-invisible
			isPopupShowing: false,
			ip: "192.168.1.104",
			url: "bjstdmngbgr04.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			//["Chrome,"Firefox","Safari","Ubuntu"]
			// browserIcons: ['Chrome', 'Firefox', 'Safari', 'Ubuntu'],
		},

		{
			id: '005',
			//form:true-physical,false-virtual
			form: true,
			//status:true-idle, false-building
			status: false,
			//isPopupShowing:true-visible, false-invisible
			isPopupShowing: false,
			ip: "192.168.1.105",
			url: "bjstdmngbgr05.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			//["Chrome,"Firefox","Safari","Ubuntu"]
			// browserIcons: ['Chrome', 'Firefox', 'Safari', 'Ubuntu'],
		},

		{
			id: '006',
			//form:true-physical,false-virtual
			form: true,
			//status:true-idle, false-building
			status: false,
			//isPopupShowing:true-visible, false-invisible
			isPopupShowing: false,
			ip: "192.168.1.106",
			url: "bjstdmngbgr06.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			//["Chrome,"Firefox","Safari","Ubuntu"]
			// browserIcons: ['Chrome', 'Firefox', 'Safari', 'Ubuntu'],
		},
	]
};

export default function browserlistReducer(preState = initState, action) {

	const { type, data } = action;

	switch (type) {

		case 'deleteItem':

			return {
				...preState,
				browserItems: data
			};

		default:
			return preState;
	}
}
