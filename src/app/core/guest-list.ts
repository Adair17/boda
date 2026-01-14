import { Guest } from './guest.interfaces'

interface GuestList {
	[key: string]: Guest
}

export const GUEST_LIST: GuestList = {
	mi_bautizo: {
		guestId: 'mi_bautizo'
	}
}
