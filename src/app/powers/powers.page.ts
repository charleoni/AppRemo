import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.page.html',
  styleUrls: ['./powers.page.scss'],
})
export class PowersPage implements OnInit {
  nombre = 'Carlos Leonidas Alcalá';
  ejercicio = 'Nombre y poderes de personajes mayores a 30 años';

  members= [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: [
        'Radiation resistance',
        'Turning tiny',
        'Radiation blast'
      ]
    },

    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },

    {
      name: "Eternal Flame",
      age: 32,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    },

    {
      name: "Molecule Man",
      age: 28,
      secretIdentity: "Dan Jukes",
      powers: [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },

    {

      name: "Molecule Man",
      age: 34,
      secretIdentity: "Dan Jukes",
      powers: [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },

    {
      name: "Molecule Man",
      age: 45,
      secretIdentity: "Dan Jukes",
      powers: [
        "Radiation resistance",
        "Turning tiny",
      ]
    },
 ];
  
  constructor() { }

  ngOnInit() {
  }

}
