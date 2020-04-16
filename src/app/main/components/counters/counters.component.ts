import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class CountersComponent {
  @Input() input: any;

  constructor(private router: Router) {}

  buttonClick() {
    this.router.navigate(['/heroes', this.input.id, this.input.name, this.input.type], {
      skipLocationChange: true
    });
  }
}
