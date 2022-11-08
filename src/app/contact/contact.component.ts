import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {

  }


  showLabel(input: any) {
    if (input.value.length > 0) {
      input.previousSibling.classList.add("showLabel")
    } else {
      input.previousSibling.classList.remove("showLabel")
    }

  }



  ngOnInit(): void {
  }

}
