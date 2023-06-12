import { Component, ElementRef, ViewChild, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  data: any = [];
  @ViewChild('refer') div: ElementRef<HTMLDivElement>;
  icons: string[];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getData();
    this.icons = [
      'account_balance_wallet',
      'attach_money',
      'savings',
      'payments',
    ];
  }

  getData() {
    this.http
      .get(`https://1.api.fy23ey01.careers.ifelsecloud.com/`)
      .subscribe((res) => {
        this.data = Object.entries(res);
      });
  }
}
