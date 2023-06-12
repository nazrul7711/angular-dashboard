import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.scss'],
})
export class AllExpensesComponent {
  public charts: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.charts = new Chart('MyDoughnut', {
      type: 'doughnut',

      data: {
        labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 240, 100, 432],
            backgroundColor: ['#0f287a', '#2947AA', '#6f8ded', '#bfccf5'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true,
            },
          },
        },
      },
    });
  }
}
