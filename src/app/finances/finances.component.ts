import { Component } from '@angular/core';
import { Chart, ChartArea } from 'chart.js';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss'],
})
export class FinancesComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyLineChart', {
      type: 'line',

      data: {
        labels: ['01', '05', '10', '15', '20', '25', '30'],
        datasets: [
          {
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            tension: 0.4,
            pointStyle: false,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) {
                return;
              }
              const gradient = ctx.createLinearGradient(
                0,
                chartArea.bottom,
                0,
                chartArea.top
              );
              gradient.addColorStop(1, 'rgb(235, 64, 52,.5)');
              gradient.addColorStop(0.5, 'rgb(235, 64, 52,.2)');
              gradient.addColorStop(0, 'rgb(235, 64, 52,.1)');
              return gradient;
            },
            fill: true,
          },
          {
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            tension: 0.4,
            pointStyle: false,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) {
                return;
              }

              const gradient = ctx.createLinearGradient(
                0,
                chartArea.bottom,
                0,
                chartArea.top
              );
              gradient.addColorStop(1, 'rgb(52, 128, 235,.5)');
              gradient.addColorStop(0.5, 'rgb(52, 128, 235,.2)');
              gradient.addColorStop(0, 'rgb(52, 128, 235,.1)');
              return gradient;
            },
            fill: true,
          },
        ],
      },
      options: {
        scales:{
          x:{
            grid:{
              display:false
            }
          },
        },
        aspectRatio: 2.5,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
