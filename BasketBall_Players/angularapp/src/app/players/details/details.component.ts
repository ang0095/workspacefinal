import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  player = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10
  };
  constructor(private ps:PlayersService,private ar:ActivatedRoute) { }
  id:number
  
  ngOnInit(): void {
    this.id=1  
    this.ps.getPlayer(this.id).subscribe(data=>{this.player=data})  
  }

}
