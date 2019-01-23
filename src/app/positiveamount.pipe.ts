import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg';

@Pipe({
    name: "positiveamount",
    pure: false
})

export class PositiveAmountPipe implements PipeTransform {
    transform(input: Keg[]) {
        let output: Keg[] = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i].amount > 0) {
                output.push(input[i]);
            }
        }
        return output;
    }
}