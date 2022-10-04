import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  estudiantesPadre: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarEstudiante($event: any) : void {
    this.estudiantesPadre.push($event);
    }
}
