import { Pipe, PipeTransform } from '@angular/core';
import sampleData from './data.json';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

	Users: any = sampleData;
//  transform(value: unknown, ...args: unknown[]): unknown {
  //  return null;
  //}
transform(items: Array<any>, filter: {[key: number]: any }): Array<any> {
            return items.filter(item => {
                let notMatchingField = Object.keys(filter)
                                             .find(key => item[key] !== filter[key]);

                return !notMatchingField; // true if matches all fields
            });
       
}

        }

       
