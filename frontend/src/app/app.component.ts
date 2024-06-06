
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data:string = '';
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getData().subscribe(response => {
    //   this.data = response ;
    //   console.log(this.data);
      
    // })
  }

}
