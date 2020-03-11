import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  feesDetails = {
    "id": 7,
    "uniqueId": "",
    "version": 0,
    "refNumber": "2018-08-22N1XMN",
    "bookingDate": "2018-08-22",
    "bookingFrom": "2018-08-23",
    "bookingTo": "2018-08-30",
    "rentAmount": 21950,
    "depositAmount": 9180,
    "depositPainOn": null,
    "rentPainOn": null,
    "depositPaid": false,
    "rentPaid": false,
    "bookingDetails": [
      {
        "id": 11,
        "uniqueId": "",
        "version": 0,
        "slot": {
          "id": 81,
          "uniqueId": "",
          "version": 1,
          "start": "2018-08-25 15:01:00",
          "end": "2018-08-25 18:30:00",
          "occupancy": 1,
          "shiftType": "SECOND",
          "occupiedCount": 1,
          "slotStatus": "TEMPORARY_BLOCKED",
          "bookingDetailIdentifier": null
        },
        "rent": 2850,
        "electricCharges": 7500,
        "administrationCharges": 1000,
        "showTax": 100,
        "gstAmount": 0,
        "total": 11450
      },
      {
        "id": 12,
        "uniqueId": "",
        "version": 0,
        "slot": {
          "id": 41,
          "uniqueId": "",
          "version": 1,
          "start": "2018-08-25 09:01:00",
          "end": "2018-08-25 12:30:00",
          "occupancy": 1,
          "shiftType": "FIRST",
          "occupiedCount": 1,
          "slotStatus": "TEMPORARY_BLOCKED",
          "bookingDetailIdentifier": null
        },
        "rent": 1900,
        "electricCharges": 7500,
        "administrationCharges": 1000,
        "showTax": 100,
        "gstAmount": 0,
        "total": 10500
      }
    ]
  }
}
