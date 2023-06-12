import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  @ViewChild('imgdiv') imgdivRef!: ElementRef;
  imgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
  scrollList(a: HTMLDivElement) {
    a.scrollLeft += 10;
  }
}
