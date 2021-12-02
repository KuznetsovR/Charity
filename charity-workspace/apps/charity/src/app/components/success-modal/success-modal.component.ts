import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-success-modal',
	templateUrl: './success-modal.component.html',
	styleUrls: ['./success-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessModalComponent implements OnInit {
	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.bsModalRef.hide();
		}, 1000);
	}
}
