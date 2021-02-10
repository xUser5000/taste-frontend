import { Component, Input, OnInit } from '@angular/core';
import * as moment from "moment";
import { Song } from 'src/app/model/song.model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

  // @Input() song: Song = new Song();

  constructor() { }

  ngOnInit(): void {
  }

}
