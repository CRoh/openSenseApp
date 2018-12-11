import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the AccelerometerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accelerometer',
  templateUrl: 'accelerometer.html',
})
export class AccelerometerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    //first Chart, visualizing x-axis
    HighCharts.chart('xValues', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Acceleration on X-Axis'
      },
      xAxis: {
        title: {
          text: 'Measurements'
        }
      },
      yAxis: {
        title: {
          text: 'Value of Acceleration'
        }
      },
      series: [{
        data: [9, 6, 9, 8, 1, 6, 10, 4, 1, 3, 2, 3, 12, 8, 10, 1, 3, 12, 8, 10, 4, 5, 4, 7, 0, 7, 7, 12, 1, 3, 0, 5, 3, 8, 7, 6, 5, 11, 3, 6, 8, 7, 5, 2, 0, 5, 2, 9, 9, 4]
        }]
    });

    //second Chart, visualizing y-axis
    HighCharts.chart('yValues', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Acceleration on Y-Axis'
      },
      xAxis: {
        title: {
          text: 'Measurements'
        }
      },
      yAxis: {
        title: {
          text: 'Value of Acceleration'
        }
      },
      series: [{
        data: [11, 6, 5, 7, 2, 12, 7, 5, 0, 10, 9, 10, 12, 6, 7, 9, 11, 1, 6, 4, 6, 11, 9, 1, 10, 9, 9, 8, 1, 3, 12, 8, 11, 0, 5, 4, 12, 12, 12, 10, 4, 8, 3, 5, 11, 6, 3, 8, 5, 9]
      }]
    });

    //third chart, visualizing z-axis
    HighCharts.chart('zValues', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Acceleration on Z-Axis'
      },
      xAxis: {
        title: {
          text: 'Measurements'
        }
      },
      yAxis: {
        title: {
          text: 'Value of Acceleration'
        }
      },
      series: [{
        data: [12, 9, 6, 8, 1, 8, 0, 3, 12, 1, 1, 8, 7, 10, 8, 10, 9, 4, 2, 11, 10, 11, 10, 7, 1, 0, 12, 9, 0, 4, 11, 8, 6, 1, 3, 9, 11, 3, 5, 12, 8, 7, 8, 9, 12, 11, 9, 2, 12, 0]
      }]
    });
    console.log('ionViewDidLoad AccelerometerPage');
  }

}
