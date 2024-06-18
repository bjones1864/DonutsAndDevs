import { Component } from '@angular/core';
import { DevModel } from '../../models/dev-model';
import { FormsModule } from '@angular/forms';
import { DonutModel } from '../../models/donut-model';
import { DevsService } from '../../services/devs.service';
import { DevRowComponent } from '../dev-row/dev-row.component';

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [FormsModule, DevRowComponent],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.css'
})
export class DevsComponent {
  constructor(private _devsService: DevsService) {}

  devResult: DevModel = {} as DevModel;

  ngOnInit(): void{
    this.callAPI();
  }

  callAPI(): void{
    this._devsService.getDevs().subscribe((response: DevModel) => {
      console.log(response);
      this.devResult = response;
    })
  }

}
