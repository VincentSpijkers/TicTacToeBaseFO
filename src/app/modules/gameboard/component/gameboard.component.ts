import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../../services/socket.service";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  //maybe there is a better way then a 2d string array? OOP maybe?
  public ticTacToeGrid?: string [][];

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.createPlayingField()
  }

  //remove this function and use a grid created by the backend
  public createPlayingField(): void{
    this.ticTacToeGrid = [];
    for(let i: number = 0; i < 3; i++) {
      this.ticTacToeGrid[i] = [];
      for(let j: number = 0; j< 3; j++) {
        this.ticTacToeGrid[i][j] = " ";
      }
    }
  }

}
