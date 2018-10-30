import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public randomLeafs: Array<any> = [];
  public title: String = 'WIND';
  private sanitizer: DomSanitizer;

  ngOnInit() {
    this.createLeafs();
  }

  createLeafs(){
      let margin = this.randomSize(100);
      let padding = this.randomSize(100);
      let size = this.randomSize(200);
      this.randomLeafs.push(
        {
          height: size,
          width: size,
          margin: margin.toString() +'px',
          padding: padding.toString() +'px',
        });
  }

  randomSize(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}


