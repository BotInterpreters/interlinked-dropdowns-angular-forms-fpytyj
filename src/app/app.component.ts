import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* The model the form begins with. */
  model = {
    regions: 'Region I',
    province: 'Ilocos Norte',
    municipalityCity: 'Adams',
  };

  /* Our data */
  regions: string[] = ['Region I', 'Region II'];
  names = [
    { regions: 'Region I', province: 'Ilocos Norte', municpalityCity: 'Adams' },
    { regions: 'Region I', province: 'Ilocos Sur', municpalityCity: 'Bacarra' },
    { regions: 'Region I', province: 'Ilocos Sur', municpalityCity: 'Badoc' },
    { regions: 'Region I', province: 'Ilocos Sur', municpalityCity: 'Bangui' },
    { regions: 'Region II', province: 'Batanes', municipalityCity: 'green' },
    { regions: 'Region II', province: 'Cagayan', municipalityCity: 'yellow' },
  ];

  /* The names allowed to be used with the currently selected species */
  appropriateNames;

  /* Delay rendering of the form until appropriateName has been populated.
   * Without this the name dropdown is empty until the species is changed, which
   * is rather inconvenient if you want to use the first species in the dropdown */
  formReady: boolean = false;

  ngOnInit() {
    /* Run the change event handler on page load to populate appropriateNames
     * variable and the name dropdown */
    this.onChange(this.model.regions);
    this.formReady = true;
  }

  /**
   * Runs every time the species drop down is changed and populates
   * the name dropdown with the names available for that species.
   *
   * @param regions The species currently selected
   */
  onChange(regions: string) {
    console.log('selected species: ', regions);

    /* Everytime the dropdown changes the name array is iterated through.
     * With large arrays this could slow things down, but I haven't had any
     * issues with small arrays */
    this.appropriateNames = this.names.filter((obj) => {
      return obj.regions === regions;
    });

    /* Change the name dropdown to the first item in the appropriateName array */
    this.model.province = this.appropriateNames[0].province;
    this.model.municipalityCity = this.appropriateNames[0].municipalityCity;

    console.log(this.appropriateNames);
  }
}
