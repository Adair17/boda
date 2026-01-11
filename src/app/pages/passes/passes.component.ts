import { Component, inject } from '@angular/core'

import { GlobalState } from '@core/global.state'

@Component({
	template: `
		<ng-container *ngIf="guest$ | async as guest">
			<img src="/assets/images/Mikela.jpeg" alt="Mikela" class="circular-img animate__animated animate__fadeInDown animate__delay-2s" />
			<p class="animate__animated animate__fadeInDown animate__delay-2s">
			{{ 'PASSES.MESSAGE' | translate }}
			</p>
			<strong class="animate__animated animate__fadeInDown animate__delay-2s">
			Papás
			</strong>
			<p class="animate__animated animate__fadeInDown animate__delay-2s">
			José Antonio Ventura <br />
			Katherine Gutiérrez
			</p>
		</ng-container>
	`,
	styleUrls: ['./passes.component.scss'],
})
export class PassesComponent {
	private readonly globalState = inject(GlobalState)

	readonly guest$ = this.globalState.guest$
}
