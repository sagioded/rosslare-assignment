
import { Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
    <div class="loader">
        <i class="fa fa-circle-notch fa-spin"></i>
    </div>
  `,
    styles: [`
        :host {
            width: 100%;
            height: 100%;
            background: none;
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
        }

        .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 70px;
        }
        i {
            color: #ffffffba;
        }
  `]
})
export class LoaderComponent {

}
