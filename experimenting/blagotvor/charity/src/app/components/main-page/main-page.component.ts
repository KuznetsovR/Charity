import { Component, OnInit } from '@angular/core';
import { SECTIONS } from '../../constants/sections';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GetCardModalComponent } from '../get-card-modal/get-card-modal.component';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
	sections = SECTIONS;
	bsModalRef?: BsModalRef;
	constructor(private modalService: BsModalService) {}

	ngOnInit(): void {}
	openModal(): void {
		this.bsModalRef = this.modalService.show(GetCardModalComponent,  {class: 'modal-lg modal-dialog-centered'});
	}
}
