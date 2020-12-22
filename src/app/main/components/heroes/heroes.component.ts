import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { HashtagService } from '../../services/hashtag.service';
import { DetailType } from '../../models/detailType.enum';
import { AbilityService } from '../../services/ability.service';
import { GlobalService } from '../../../core/services/global.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../../app.component.scss']
})

export class HeroesComponent implements OnInit{
  [x: string]: any;
  colors = ['cosmic', 'tech', 'mutant', 'skill', 'science', 'mystic'];
  backgrounds = ['cosmic-bg', 'tech-bg', 'mutant-bg', 'skill-bg', 'science-bg', 'mystic-bg'];
  user: firebase.User;

  public detailType = DetailType.None;

  detailsResults: Observable<any>[] = [];

  @Input() heroe: any;
  @Output() isactive = new EventEmitter<Heroe>();

  constructor(private authService: AuthService,
    private hashtagService: HashtagService,
    private abilityService: AbilityService,
    private global: GlobalService) {
    this.authService.authState$.subscribe(user => (this.user = user));
  }

  getCSS(str: string): string {
    return (this.detailType == 0) ? this.colors[str] : this.backgrounds[str];
  }
 
  getImage(str: string): string {
    return `./assets/images/${this.colors[str]}.png`;
  }

  getHeroeClass(str: string): string {
    return `${this.colors[str]}`;
  }

  toggleDetails() {
    this.detailType = (++this.detailType%3);
    if (this.global.isDebug)  console.log('URL: ', this.detailType);
  }

  async ngOnInit(): Promise<void> {
    this.detailsResults[0] = this.abilityService.getByHeroe(this.heroe.id);
    this.detailsResults[1] = this.hashtagService.getByHeroe(this.heroe.id);
  }
}
