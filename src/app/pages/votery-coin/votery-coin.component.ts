import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votery-coin',
  templateUrl: './votery-coin.component.html',
  styleUrls: ['./votery-coin.component.scss']
})
export class VoteryCoinComponent implements OnInit {
  timerValue: number = 45;
  
  constructor() { }

  ngOnInit(): void {
  }

}
