import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutsComponent } from "./components/donuts/donuts.component";
import { DevsComponent } from "./components/devs/devs.component";
import { MatTabsModule } from '@angular/material/tabs'; 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DonutsComponent, DevsComponent, MatTabsModule]
})
export class AppComponent {
  title = 'DonutsAndDevs';
}
