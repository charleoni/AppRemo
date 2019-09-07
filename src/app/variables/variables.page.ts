import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.page.html',
  styleUrls: ['./variables.page.scss'],
})
export class VariablesPage implements OnInit {
name = 'Carlos Leonidas Alcalá';
usuario =
[
  {
  nombre : 'Juan Santos',
  password : 1234,
  estado : false
  },
  {
    nombre : 'Alvaro Uribe',
    password : 4321,
    estado : true
    }
];

sitios =
[
  {
    nameSite : './assets/Lugares-turisticos-Colombia-Bogota.jpg',
    description: 'Próspera capital de Colombia distinguida el año 2018 con el premio Travellers Choice en la categoría de 25 mejores destinos de Sudamérica.',
    lugar: 'Bogota D.C'

  },
  {
    nameSite : './assets/Lugares-turisticos-Colombia-Cartagena.jpg',
    description: 'Mágica ciudad levantada a orillas del Caribe rodeada de imponentes murallas y fortificaciones que alguna vez la protegieron de ataques de piratas y corsarios.',
    lugar: 'Cartagena de Indias D.T. y C.'
  },
  {
    nameSite : './assets/Lugares-turisticos-Colombia-Gorgona.jpg',
    description: 'Accesible navegando desde el municipio de Guapi, se encuentra la Isla Gorgona, un santuario de la naturaleza declarado Patrimonio de la Humanidad por la Unesco, considerado uno de los lugares turísticos de Colombia donde la diversidad de flora y fauna es más abundante.',
    lugar: 'Isla Gorgona.'
  },
  {
    nameSite : './assets/Lugares-turisticos-Colombia-Leticia.jpg',
    description: 'Puerta de entrada a la extraordinaria belleza de la selva amazónica, una ciudad multicultural que técnicamente forma una sola con el municipio brasileño de Tabatinga, hogar de numerosas comunidades indígenas que manejan la mayoría de los servicios turísticos.',
    lugar: 'Leticia.'
  },
  {
    nameSite : './assets/Lugares-turisticos-Colombia-San-Andres.jpg',
    description: 'Archipiélago situado en el Caribe, en una zona de cautivante belleza declarada Reserva de la Biósfera por la Unesco, donde conviven bosques de manglares, palmeras, barreras coralinas, praderas marinas y paradisiacas playas consideradas entre las más hermosas de América.',
    lugar: 'San Andres'
  },
  {
    nameSite : './assets/Lugares-turisticos-Colombia-Santa-Fe.jpg',
    description: 'Declarada Monumento Nacional, es otro de los lugares turísticos de Colombia que sorprenden por su riqueza histórica, fascinando por su aspecto de ciudad congelada en el tiempo, con calles de piedra y antiguas casonas, desde las cuales se asoman delicados balcones, decorados con balaustradas en madera.',
    lugar: 'Santa fe de Antioquia'
  },
  {
    nameSite : './assets/Lugares-turisticos-Colombia-Tayrona.jpg',
    description: 'Entre los hermosos paisajes de la sierra nevada y el mar Caribe, se sitúa la que es considerada la ciudad más antigua de Colombia y la segunda de Sudamérica, enclave de historia, que aun conserva gran parte de sus arquitecturas coloniales.',
    lugar: 'Tayrona'
  },
  {
    nameSite : './assets/Lugares-turisticos-de-Colombia-Tierradentro.jpg',
    description: 'Conocida como “Ciudad Blanca”, Popayán es la capital del departamento del Cauca y otro de los lugares turísticos de Colombia imperdibles para amantes de la historia, una ciudad con hermosas arquitecturas coloniales, especialmente famosa por los desfiles procesionales que se llevan a cabo en Semana Santa, una tradicional celebración que ha sido declarada patrimonio inmaterial de la humanidad por la Unesco.',
    lugar: 'Tierradentro'
  },
  {
    nameSite : './assets/Colombia-turismo-Quindio.jpg',
    description: 'Maravillosa región de cafetales situada entre los departamentos de Caldas, Risaralda y Quindío, característica por sus paisajes montañosos, picos nevados, verdes colinas y valles agrícolas, entre los cuales irrumpen mágicos poblados coloniales y haciendas campestres que viven en torno al turismo rural y la producción cafetera.',
    lugar: 'Quindío'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
