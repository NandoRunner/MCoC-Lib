import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/core/services/global.service";
import { AbilityType } from "../../models/abilityType.enum";
import { HeroesCountBy } from "../../models/heroesCountBy.model";

@Component({
  selector: "app-counters",
  templateUrl: "./counters.component.html",
  styleUrls: ["../../../app.component.scss"],
})
export class CountersComponent implements OnInit {
  @Input() isDetail: boolean = false;
  @Input() input: HeroesCountBy;

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    if (this.input.qty == 1) return;
    
    GlobalService.getInstance().data.push({
      text: this.input.name,
      color: GlobalService.getInstance().getRandomColor2(),
      weight: this.input.qty,
    });
    GlobalService.getInstance().map[this.input.name] = this.input.id;
  }

  // buttonClick() {
  //   this.router.navigate(
  //     ["/heroes", this.input.id, this.input.name, AbilityType.Counter],
  //     {
  //       skipLocationChange: true,
  //     }
  //   );
  // }
}
