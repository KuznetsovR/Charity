import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-error-modal',
	templateUrl: './error-modal.component.html',
	styleUrls: ['./error-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class ErrorModalComponent implements OnInit {
	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.bsModalRef.hide();
		}, 3000);
	}
}
