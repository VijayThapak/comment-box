import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  getTimeStamp(date: Date) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return `${months[date.getMonth()]} ${date.getDate()} at ${this.hourwithAMPM(date)}`;
  }

  private hourwithAMPM(date: Date) {
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    const hours = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
    return hours + ':' + date.getMinutes() + ' ' + ampm;
  }
}
