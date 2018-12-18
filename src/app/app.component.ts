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

  createLeaf() {
    const margin = this.randomSize(100);
    const padding = this.randomSize(100);
    const size = this.randomSize(200);
    this.randomLeafs.push(
      {
        height: size,
        width: size,
        margin: margin.toString() + '%',
        padding: padding.toString() + 'px',
      });
    console.log(this.randomLeafs);
  }

  createLeafs() {
    const leafqty = Math.random() * (20 - 5) + 5;
    for (let index = 0; index < leafqty; index++) {
      this.createLeaf();
    }
  }

  randomSize(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}


