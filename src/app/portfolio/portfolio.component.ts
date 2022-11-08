import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }


  showModal(targetBox:any) {
    let targetSrc = targetBox.firstChild.getAttribute('src');
    let targetName = targetBox.firstChild.getAttribute('alt');
    let modalImg = <HTMLElement>document.querySelector(".modal-body img");
    let modalTitle = <HTMLElement>document.querySelector(".modal-title h2");
    modalImg.setAttribute('src', targetSrc);
    modalTitle.innerHTML = `${targetName}`;
    // console.log(modalTitle)
    // console.log(targetName)
    // console.log(modalImgSrc)
  }

  ngOnInit(): void {
  }

}
