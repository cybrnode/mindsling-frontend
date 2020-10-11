import { Pipe, PipeTransform } from '@angular/core';
/**
 * This pipe is used to remove underscore or any non word character and replace it with space
 */
@Pipe({
  name: 'unslugify'
})
export class UnslugifyPipe implements PipeTransform {

  transform(item: string): string {
    return item && item.replace(/[^a-zA-Z0-9 ]/g, ' ')  || item;
  }

}
