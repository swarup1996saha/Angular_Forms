import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
//  @ViewChild('templateForm') templateForm!: NgForm;
  constructor() { }

  // namePattern:any="^[a-zA-Z]+$"
  ngOnInit(): void {
  }
  submit(templateForm:NgForm){
    // console.log(this.templateForm);
    console.log(templateForm);
  }

}
