import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/core/services/global.service";
import { AbilityType } from "../../models/abilityType.enum";
import { HeroesCountBy } from "../../models/heroesCountBy.model";

@Component({
  selector: "app-abilities",
  templateUrl: "./abilities.component.html",
  styleUrls: ["../../../app.component.scss"],
})
export class AbilitiesComponent implements OnInit {
  @Input() isDetail: boolean = false;
  @Input() input: HeroesCountBy;

  constructor(private router: Router, private global: GlobalService) {}

  async ngOnInit(): Promise<void> {
    
    if (this.input.qty == 1) return;
    
    this.global.data.push({
      text: this.input.name,
      color: this.global.getRandomColor2(),
      weight: this.input.qty
    });
    this.global.map[this.input.name] = this.input.id;
  }

  buttonClick() {
    this.router.navigate(
      ["/heroes", this.input.id, this.input.name, AbilityType.Regular],
      {
        skipLocationChange: true,
      }
    );
  }
}
