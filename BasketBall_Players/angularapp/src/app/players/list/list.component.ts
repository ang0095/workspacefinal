import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players:Player[]=[]
  constructor(private palayerservice:PlayersService) { }

  deletePlayer(id:number)
  {

  }
  ngOnInit(): void {

    this.palayerservice.getPlayers().subscribe(data=>{this.players.push(...data)})

  }

}
