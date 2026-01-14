export interface Guest {
	guestId: string
}

export interface GuestList {
	[key: string]: Guest
}

export interface Schedule {
	label: string
	time: string
	delay: string
	maps?: {
		hasParkings: boolean
		isChurch: boolean
		buildingName: string
	}
}

export type ScheduleList = Schedule[]
