import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/core/services/global.service";
import { HeroesCountBy } from "../../models/heroesCountBy.model";


@Component({
  selector: "app-hashtags",
  templateUrl: "./hashtags.component.html",
  styleUrls: ["../../../app.component.scss"],
})
export class HashtagsComponent implements OnInit {
  @Input() isDetail: boolean = false;
  @Input() input: HeroesCountBy;

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    GlobalService.getInstance().data.push({
      text: this.input.name,
      color: GlobalService.getInstance().getRandomColor2(),
      weight: this.input.qty
    });
    GlobalService.getInstance().map[this.input.name] = this.input.id;
  }

  // buttonClick() {
  //   this.router.navigate(["/heroes", this.input.id, this.input.name, "3"], {
  //     skipLocationChange: true,
  //   });
  // }
}
