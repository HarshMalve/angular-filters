import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText: any;
  filterObject: any;
  response: any = [
        { "checkBoxEnable": 1, "employeeId": 13, "ecn": "testdev4", "empName": "gargii test", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": 100, "band": 1 },
        { "checkBoxEnable": 1, "employeeId": 3982, "ecn": "testday1", "empName": "kiyara test", "status": null, "completionDate": "NA", "score": "NA", "business": 32, "department": 100, "band": 10 },
        { "checkBoxEnable": 1, "employeeId": 19415, "ecn": "kashish", "empName": "gargii test", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": 100, "band": 10 },
        { "checkBoxEnable": 1, "employeeId": 19416, "ecn": "swapnil", "empName": "kiyara test", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": 100, "band": 1 },
        { "checkBoxEnable": 1, "employeeId": 19420, "ecn": "pushpa", "empName": "kiyara test", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": 9, "band": 10 },
        { "checkBoxEnable": 1, "employeeId": 19448, "ecn": "induction3", "empName": "kiyara test", "status": null, "completionDate": "NA", "score": "NA", "business": 3, "department": 100, "band": 1 },
        { "checkBoxEnable": 1, "employeeId": 20075, "ecn": "demo10", "empName": "kiyara test", "status": null, "completionDate": "NA", "score": "NA", "business": 22, "department": 100, "band": 10 },
        { "checkBoxEnable": 1, "employeeId": 20076, "ecn": "demo11", "empName": "gargii test", "status": null, "completionDate": "NA", "score": "NA", "business": 22, "department": 100, "band": 2 },
        { "checkBoxEnable": 1, "employeeId": 20077, "ecn": "demo12", "empName": "kiyara test", "status": null, "completionDate": "NA", "score": "NA", "business": 22, "department": 100, "band": 10 },
        { "checkBoxEnable": 1, "employeeId": 24374, "ecn": "devmarch01", "empName": "devmarch one steam", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": null, "band": null }, 
        { "checkBoxEnable": 1, "employeeId": 24385, "ecn": "devmarch12", "empName": "devmarch twelve build", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": null, "band": null }, 
        { "checkBoxEnable": 1, "employeeId": 24387, "ecn": "devmarch14", "empName": "devmarch fourteen build", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": null, "band": null }, 
        { "checkBoxEnable": 1, "employeeId": 24390, "ecn": "devmarch18", "empName": "devmarch eighteen build", "status": null, "completionDate": "NA", "score": "NA", "business": null, "department": null, "band": null }
  ];
  tempResponse: any;

  constructor() {

  }

  filterData() {
    let filter = [
      {
        employeeId: this.inputText
      },
      {
        ecn: this.inputText
      },
      {
        empName: this.inputText 
      }
    ];
    if(this.inputText.length >= 3) {
      this.tempResponse = this.response;

    } else if(this.inputText.length == 0) {
      this.response = this.tempResponse;
    }
  }
}
