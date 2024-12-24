import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
import { AboutOneComponent } from "./about-one/about-one.component";
import { FormComponent } from './form/form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SecondComponent, ThirdComponent, AboutOneComponent, FormComponent]
})
export class AppComponent {
  title = 'myNewApp';
}
