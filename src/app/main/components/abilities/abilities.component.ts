import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class AbilitiesComponent {
  @Input() isDetail: boolean = false;
  @Input() input: any;

  constructor(private router: Router) {}

  buttonClick() {
    this.router.navigate(['/heroes', this.input.id, this.input.name, this.input.type], {
      skipLocationChange: true
    });
  }
}
