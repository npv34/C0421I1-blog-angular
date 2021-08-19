import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output() keyword = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  getKeyword(event: any)  {
    let value = event.target.value;
    this.keyword.emit(value);
  }

}
