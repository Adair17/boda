import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { ScheduleList } from '@core/guest.interfaces'
import { MapsDialogComponent } from './components/maps-dialog/maps-dialog.component'
import { ParkingMapsDialogComponent } from './components/parking-maps-dialog/parking-maps-dialog.component'

@Component({
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
	private readonly dialog = inject(MatDialog)

	readonly scheduleList: ScheduleList = [
		{
			label: 'SCHEDULE.RELIGIOUS_CEREMONY',
			time: '1:00 PM',
			delay: '',
			maps: {
				hasParkings: false,
				isChurch: true,
				buildingName:
					'Parroquia de San Agustín Tlaxiaca, San Agustin Tlaxiaca, Hidalgo',
			},
		},
		{
			label: 'SCHEDULE.RECEPTION',
			time: '3:00 PM',
			delay: 'animate__delay-1s',
			maps: {
				hasParkings: true,
				isChurch: false,
				buildingName:
					'Salón Hacienda Real de San Juan, San Juan Solis, Hidalgo',
			},
		},
	]

	onOpenDialogMap(isChurch: boolean, isGoogle: boolean): void {
		const data = { isChurch, isGoogle }

		this.dialog.open(MapsDialogComponent, {
			autoFocus: false,
			data,
			maxWidth: 'calc(100vw - 2rem)',
		})
	}

	onOpenParkingMapsDialog(data: boolean): void {
		this.dialog.open(ParkingMapsDialogComponent, {
			autoFocus: false,
			maxWidth: 'calc(100vw - 2rem)',
			data,
		})
	}
}
