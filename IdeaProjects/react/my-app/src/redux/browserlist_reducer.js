import { nanoid } from "nanoid";
import Windows from '../img/windows.png';
import Ubuntu from '../img/ubuntu.png';
import Debin from '../img/debin.png';
import Suse from '../img/suse.png';
import CentOS from '../img/cent_os.png';
const initState = {

	browserItems: [
		{
			id: '01',
			name: 'bjstdmngbgr01.thoughtworks.com',
			img: Windows,
			//form:true-physical,false-virtual
			form: true,
			//status:true-idle, false-building
			status: true,
			isPopupShowing: false,
			ip: "192.168.1.101",
			url: "bjstdmngbgr01.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			browserIcons: [
				{
					iconId: nanoid(),
					name: 'Chrome',
				},
			],
		},

		{
			id: '02',
			name: 'bjstdmngbgr02.thoughtworks.com',
			img: Windows,
			form: true,
			status: false,
			isPopupShowing: false,
			ip: "192.168.1.102",
			url: "bjstdmngbgr02.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			browserIcons: [
				{
					iconId: nanoid(),
					name: 'Chrome',
				},
			],
		},

		{
			id: '03',
			name: 'bjstdmngbgr03.thoughtworks.com',
			img: Ubuntu,
			form: false,
			status: false,
			isPopupShowing: false,
			ip: "192.168.1.103",
			url: "bjstdmngbgr03.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			browserIcons: [
				{
					iconId: nanoid(),
					name: 'Chrome',
				},
			],
		},

		{
			id: '04',
			name: 'bjstdmngbgr04.thoughtworks.com',
			img: Debin,
			form: false,
			status: false,
			isPopupShowing: false,
			ip: "192.168.1.104",
			url: "bjstdmngbgr04.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			browserIcons: [
				{
					iconId: nanoid(),
					name: 'Chrome',
				},
			],
		},

		{
			id: '05',
			name: 'bjstdmngbgr05.thoughtworks.com',
			img: Suse,
			// form: true,
			form: false,
			status: true,
			isPopupShowing: false,
			ip: "192.168.1.105",
			url: "bjstdmngbgr05.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			browserIcons: [
				{
					iconId: nanoid(),
					name: 'Chrome',
				},
			]
		},

		{
			id: '06',
			name: 'bjstdmngbgr06.thoughtworks.com',
			img: CentOS,
			// form: true,
			form: false,
			status: true,
			isPopupShowing: false,
			ip: "192.168.1.106",
			url: "bjstdmngbgr06.thoughtworks.com",
			location: "/var/lib/cruise-agent",
			browserIcons: [
				{
					iconId: nanoid(),
					name: 'Chrome',
				},
			],
		},
	],

};

export default function browserlistReducer(preState = initState, action) {

	const { type, data } = action;

	switch (type) {

		case 'deleteItem':

			return {
				...preState,
				browserItems: data
			};

		case "handleClickAddResource":

			return {
				...preState,
				browserIcons: data
			};

		case 'handleClickAddPopup':
			return {
				...preState,
				browserItems: data
			};

		case 'handleClickClosePopup':
			return {
				...preState,
				browserItems: data
			};

		case 'handleClickNav':
			return {
				...preState,
				browserItems: data
			};

		case 'addBrowserIcon':
			return {
				...preState,
				browserItems: data
			};

		case 'deleteBrowserIcon':
			return {
				...preState,
				browserItems: data
			};

		default:
			return preState;

	}
}
