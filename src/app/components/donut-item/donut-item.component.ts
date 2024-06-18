import { Component, Input } from '@angular/core';
import { Result } from '../../models/donut-model';

@Component({
  selector: 'tr[app-donut-item]',
  standalone: true,
  imports: [DonutItemComponent],
  templateUrl: './donut-item.component.html',
  styleUrl: './donut-item.component.css'
})
export class DonutItemComponent {
  @Input() displayDonut: Result = {} as Result;

  
}
