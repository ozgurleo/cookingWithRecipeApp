import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class Header{

    @Output()selectedFeatureEvent = new EventEmitter<string>();

    selectedFeature(feature:string){
        this.selectedFeatureEvent.emit(feature)
       
    }

}