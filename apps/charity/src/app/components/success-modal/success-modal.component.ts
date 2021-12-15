import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-success-modal',
	templateUrl: './success-modal.component.html',
	styleUrls: ['./success-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SuccessModalComponent implements OnInit {
	additionalText: string;
	constructor(private bsModalRef: BsModalRef) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.bsModalRef.hide();
		}, 3000);
	}
}
