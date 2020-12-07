import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { HashtagService } from '../../services/hashtag.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class HeroesComponent implements OnInit{
  colors = ['cosmic', 'tech', 'mutant', 'skill', 'science', 'mystic'];
  backgrounds = ['cosmic-bg', 'tech-bg', 'mutant-bg', 'skill-bg', 'science-bg', 'mystic-bg'];
  user: firebase.User;
  public showDetails = false;

  detailsResults: Observable<any>;

  @Input() heroe: any;
  @Output() isactive = new EventEmitter<Heroe>();

  constructor(private authService: AuthService,
    private hashtagService: HashtagService) {
    this.authService.authState$.subscribe(user => (this.user = user));
  }

  getCSS(str: string): string {
    if (this.showDetails)
    {
      return this.backgrounds[str];
    }
    else
    {
      return this.colors[str];
    }
 }
 
  getImage(str: string): string {
    return `./assets/images/${this.colors[str]}.png`;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  async ngOnInit(): Promise<void> {
    this.detailsResults = this.hashtagService.getByHeroe(this.heroe.id);
  }
}
