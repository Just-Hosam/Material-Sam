import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  constructor() {}

  formatClasses(classes: string[]): string {
    if (!classes || !Array.isArray(classes)) return '';

    let classesStr = ' ' + classes.join(' ') + ' ';

    return classesStr;
  }
}
