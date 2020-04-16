import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class HeroesComponent {
  colors = ['cosmic', 'tech', 'mutant', 'skill', 'science', 'mystic'];
  user: firebase.User;

  @Input() heroe: any;
  @Output() isactive = new EventEmitter<Heroe>();

  constructor(private authService: AuthService) {
    this.authService.authState$.subscribe(user => (this.user = user));
  }

  getCSS(str: string): string {
    return this.colors[str];
  }

  getImage(str: string): string {
//    console.log(`./assets/images/${this.colors[str]}.png`);
    return `./assets/images/${this.colors[str]}.png`;
  }
}
