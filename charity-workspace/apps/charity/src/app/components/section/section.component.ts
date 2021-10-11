import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Section } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent implements OnInit {
	@Input() section: Section;
	imageUrls: string[];
	constructor(private apiService: ApiService) {}
	async ngOnInit(): Promise<void> {
		if (!this.section.storesUrl) {
			return;
		}
		const shops = await this.apiService.getRequest('/shop/');
		this.imageUrls = shops.reduce((acc, val) => {
			acc.push(val.image);
			return acc;
		}, []);
	}
}
