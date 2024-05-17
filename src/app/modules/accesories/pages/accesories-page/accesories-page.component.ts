import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesories-page',
  templateUrl: './accesories-page.component.html',
  styleUrls: ['./accesories-page.component.css']
})
export class AccesoriesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videoIcon:string = "/assets/play.png";
  play:string = "Play";
  videodisabled:boolean = true;

  startVideo(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "/assets/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "/assets/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }
  
}
