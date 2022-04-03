import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number) {//question mark in ts means optional
        if(!value) return null;
        let trueLimit = (limit) ? limit : 50;
        return value.substring(0,trueLimit) + "...";
    }
}