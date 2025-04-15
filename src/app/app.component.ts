import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from "./contact-card/contact-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
}
