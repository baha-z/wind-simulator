import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.scss']
})
export class LeafComponent implements OnInit {

  @Input() height: number;
  @Input() width: number;
  @Input() margin: String;
  @Input() padding: String;

  constructor() { }

  ngOnInit() {
  }

}
