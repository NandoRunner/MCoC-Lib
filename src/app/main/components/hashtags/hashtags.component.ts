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

  constructor(private router: Router, private global: GlobalService) {}

  async ngOnInit(): Promise<void> {
    this.global.data.push({
      text: this.input.name,
      color: this.global.getRandomColor2(),
      weight: this.input.qty
    });
    this.global.map[this.input.name] = this.input.id;
  }

  buttonClick() {
    this.router.navigate(["/heroes", this.input.id, this.input.name, "3"], {
      skipLocationChange: true,
    });
  }
}
