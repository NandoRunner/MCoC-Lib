import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class HashtagsComponent {
  @Input() isDetail: boolean = false;
  @Input() input: any;

  constructor(private router: Router) {}

  buttonClick() {
    this.router.navigate(['/heroes', this.input.id, this.input.name, '3'], {
      skipLocationChange: true
    });
  }
}
