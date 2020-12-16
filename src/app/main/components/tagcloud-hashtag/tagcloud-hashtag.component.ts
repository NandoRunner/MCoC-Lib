import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CloudData, CloudOptions, ZoomOnHoverOptions } from "angular-tag-cloud-module";
import { Observable } from "rxjs";
import { Hashtag } from "../../models/hashtag.model";
import { HashtagService } from "../../services/hashtag.service";

@Component({
  selector: "app-tagcloud-hashtag",
  template: `
    <div>
      <angular-tag-cloud
        [data]="data"
        [width]="options.width"
        [height]="options.height"
        [overflow]="options.overflow"
        [strict]="true" 
        (clicked)="ItemClicked($event)"
        [zoomOnHover]="zoomOnHoverOptions"
      >
      </angular-tag-cloud>
    </div>
  `,
})
export class TagcloudHashtagComponent implements OnInit {
  @Input() input: Observable<any>;

  map = new Map<string, string>();

  data: CloudData[] = [];

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.input.forEach((a) => {
      this.data.push({
        text: a.hashtagName,
        color: this.getRandomColor(),
        weight: a.qty

      });
      this.map[a.hashtagName] = a.name;

    });
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  }

  getRandomColor2() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

  ItemClicked(clicked: CloudData) {
    //console.log(clicked);
    this.router
      .navigate(["/heroes", this.map[clicked.text], clicked.text, "3"], {
        skipLocationChange: true,
      });
  }

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 1000,
    overflow: false,
    randomizeAngle: true,
  };

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.5, // Elements will become 130 % of current zize on hover
    transitionTime: 0.5, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
    delay: 0.5 // Zoom will take affect after 0.8 seconds
  };

  // data: CloudData[] = [
  //   {
  //     "text": "w6-link",
  //     "weight": 6,
  //     "link": "http://example.org",
  //     "rotate": 0,
  //     "tooltip": "tooltip w6-link"
  //   },
  //   {
  //     "text": "w5-color-link-ext",
  //     "weight": 5,
  //     "color": "#b1a474",
  //     "link": "http://example.org",
  //     "external": true,
  //     "rotate": 0,
  //     "tooltip": "tooltip w5-color-link-ext"
  //   },
  //   {
  //     "text": "w5-color",
  //     "weight": 5,
  //     "color": "#4a7e8d",
  //     "rotate": 14,
  //     "tooltip": "tooltip w5-color"
  //   },

  // ];
}
