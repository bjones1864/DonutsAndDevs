import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonutsService } from '../../services/donuts.service';
import { DonutModel } from '../../models/donut-model';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private _donutsService: DonutsService) {}

  donutResult: DonutModel = {} as DonutModel;

  ngOnInit(): void{
    this.callAPI();
  }

  callAPI(): void{
    this._donutsService.getDonuts().subscribe((response: DonutModel) => {
      console.log(response);
      this.donutResult = response;
    })
  }
}