import { Component, Input } from '@angular/core';
import { Section } from '../../interfaces/interfaces';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent {
	@Input() section: Section;
}
