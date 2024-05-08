import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbow-page',
  templateUrl: './xbow-page.component.html',
  styleUrls: ['./xbow-page.component.css']
})
export class XbowPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  videoIcon:string = "../../../../../assets/play.png";
  play:string = "Play";
  videodisabled:boolean = true;

  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "../../../../../assets/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "../../../../../assets/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }
}
