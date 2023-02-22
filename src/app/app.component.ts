import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('attr.data-foo')
  public foo = 'bar';

  @HostBinding('attr.data-foo-2')
  public fooTwo = 'bar-2';
}
