import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  users: any = [];
  constructor(private http: HttpClient) {}
  timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http
      .get(`https://2.api.fy23ey01.careers.ifelsecloud.com/`)
      .pipe(
        map(
          (data) =>
            Array.isArray(data) &&
            data.map((user) => {
              return {
                ...user,
                date: new Date(user.registered).toLocaleDateString(),
                time: new Date(user.registered).toLocaleTimeString(
                  [],
                  this.timeOptions
                ),
              };
            })
        )
      )
      .subscribe((res) => (this.users = res));
  }
}
