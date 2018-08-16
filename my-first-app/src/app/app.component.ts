import { Component } from '@angular/core';
/**This selector element is used to replace the text in index.html
#with corresponding content from app folder, namely in this case app.component.html
and app.component.css*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Does this change the heading from app';
  name = 'give me some name now';
}
