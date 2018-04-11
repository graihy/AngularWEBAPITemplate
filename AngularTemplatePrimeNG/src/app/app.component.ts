import { Component } from '@angular/core';
export class Car {
    vin:any;
    year: any;
    brand: any;
    color: any;
}
@Component({
  selector: 'my-app',
    template: `<h1>Hello {{name}}  
<button pButton type="button" label="Click" ></button>
<p-button label="Click" ></p-button>
</h1>


<p-dataTable [value]="cars">
    <p-column field="vin" header="Vin"></p-column>
    <p-column field="year" header="Year"></p-column>
    <p-column field="brand" header="Brand"></p-column>
    <p-column field="color" header="Color"></p-column>
</p-dataTable>


`,
})
export class AppComponent  {
        name = 'Angular';
    cars: Car[] = [];
    constructor() {
        let x: Car = {
            brand : "brand",
            year : 14554,
            vin : "vin",
            color : "colr"

        };
        

        this.cars.push(x);
        this.cars.push(x);
        this.cars.push(x);

    }
}


