import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public npcs;

  constructor() { }

  ngOnInit() {
    this.npcs = [
      {name: "Bob"},
      {name: "Amontroth"}
    ]
  }

}
