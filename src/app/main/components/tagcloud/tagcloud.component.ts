import { Component, Input  } from "@angular/core";
import { Router } from "@angular/router";
import { CloudData, CloudOptions, ZoomOnHoverOptions } from "angular-tag-cloud-module";
import { GlobalService } from "../../../core/services/global.service";

@Component({
  selector: "app-tagcloud",
  template: `
    <div>
      <angular-tag-cloud
        [data]="global.data"
        [width]="options.width"
        [height]="options.height"
        [overflow]="options.overflow"
        [strict]="true" 
        (clicked)="ItemClicked($event)"
        
      >
      </angular-tag-cloud>
    </div>
  `
})
export class TagcloudComponent {
  @Input() type: number;

  constructor(private router: Router, public global: GlobalService) {}

  ItemClicked(clicked: CloudData) {
    if (this.global.isDebug) console.log('-> CloudData', clicked);
    this.router
      .navigate(["/heroes", this.global.map[clicked.text], clicked.text, this.type], {
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
