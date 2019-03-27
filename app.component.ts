import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  id = '';

  handlePosition(event) {
    const element: HTMLInputElement = document.getElementById('coordinates') as HTMLInputElement;
    element.value = event.clientX + ' X ' + event.clientY;
  this.setPosition(event)
  }

  handleValue() {
    const sampleElement: HTMLInputElement = document.getElementById('sampleText') as HTMLInputElement;
    const buttonElement: HTMLButtonElement = document.getElementById('pdfText') as HTMLButtonElement;
    buttonElement.innerHTML = sampleElement.value;
  }

  setPosition(event) {
    const button: HTMLButtonElement = document.getElementById('pdfText') as HTMLButtonElement;
    button.style.marginLeft = (event.clientX - 20) + 'px';
    button.style.marginTop = (event.clientY - 120) + 'px';
  }


}
