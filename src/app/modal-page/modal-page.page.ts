import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  val;

  sitios =
[
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-San-Bernardo1.jpg',
    description: 'Paradisiaco archipiélago en el Mar Caribe, situado a dos horas de navegación desde Cartagena de Indias, hogar de diez islas de ensueño que hacen parte del Parque Nacional Natural Corales del Rosario, una reserva de ecosistemas marinos con extensas áreas coralinas y exuberantes bosques de manglares.',
    lugar: 'Archipiélago San Bernardo (Bol)',
    tipo: 'turismo'

  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-Baru.jpg',
    description: 'Península que termina de complementar las paradisiacos escenarios que se esconden en las cercanías de Cartagena de Indias (a 30 minutos de navegación), ciudad reconocida por albergar en sus entornos muchas de las mejores playas de Colombia.',
    lugar: 'Baru',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-Capurgana.jpg',
    description: 'Pequeña localidad situada prácticamente al borde de la frontera con Panamá, un sitio de escenarios paradisiacos, donde se entremezclan acantilados, bahías de corales y aguas cristalinas, entre el Mar Caribe y la Selva del Darién.',
    lugar: 'Capurgana.',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-La-Vela.jpg',
    description: 'Otra de las playas de Colombia bañadas por el Mar Caribe, un borde costero que se extiende por la península de la Guajira, sitio de exóticos escenarios desérticos que contrastan con el azul intenso del mar.',
    lugar: 'Cabo de la vela',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-Nuqui.jpg',
    description: 'Una más de las mejores playas de Colombia escondidas en el Departamento de Chocó, a orillas del Océano Pacífico. Una localidad con playas de arenas doradas rodeadas de exuberante vegetación tropical, con olas ideales para la práctica de surf y puntos de inmersión privilegiados para el buceo y snorkeling.',
    lugar: 'Niqui',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-Rosario.jpg',
    description: 'Conjunto de 27 islas en el Mar Caribe, accesibles tras aproximadamente una hora y media de navegación desde Cartagena de Indias. Su territorio, al igual que el Archipiélago de San Bernardo, hace parte del Parque Nacional Natural Corales del Rosario, compartiendo sus magníficos escenarios marinos inmersos entre bosques de manglares.',
    lugar: 'Islas del rosario',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-Solano.jpg',
    description: 'También conocida como “El Parque de las Ballenas”, una playa de Colombia a orillas del Océano Pacífico, donde conjugan impresionantes escenarios de cerros, bosques tropicales, cascadas a la orilla del mar, hermosas playas y una cuantiosa biodiversidad, entre las cuales figuran las ballenas jorobadas, apreciables entre julio a octubre.',
    lugar: 'Bahía Solano',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/Mejores-Playas-de-Colombia-Taganga.jpg',
    description: 'Pintoresca aldea de pescadores situada a corta distancia de Santa Marta, una localidad que destaca por la belleza de sus paisajes, entre montañas tapizadas de verde y hermosas playas bañadas por el Mar Caribe.',
    lugar: 'Taganga',
    tipo: 'turismo'
  },
  {
    nameSite : './assets/plato-arepas-colombianas-maiz-queso.jpg',
    description: 'La arepa hace parte de los alimentos básicos y tradicionales de la cocina colombiana. El ingrediente principal es el maíz en diferentes variedades, dependiendo de la región donde la consuman. Por ejemplo en el departamento de Antioquia se hace generalmente de maíz blanco y en la región de Santander de maíz amarillo. Es un producto bastante versátil en la cocina, por ello no les extrañe encontrar decenas de tipos de arepas. A mi personalmente me encantan las arepas rellenas de queso para el desayuno. No me aguanté y les pegué un mordisquito 🙂  .',
    lugar: 'Arepas de maiz y queso',
    tipo: 'gastronomia'
  },
  {
    nameSite : './assets/plato-caldo-de-pollo-arepa-platos-tipicos-colombia.jpg',
    description: 'Usado como remedio contra todo, el caldo de pollo es uno de los clásicos de la cocina colombiana. Fácil de preparar, este plato se compone de pollo (ojalá criollo de granja), papa blanca y legumbres (tomate, cebolla, apio en rama, cilantro, etc). En la foto acompañado de arepas asadas.',
    lugar: 'Caldo de pollo',
    tipo: 'gastronomia'
  },
  {
    nameSite : './assets/plato-changua-comida-colombiana.jpg',
    description: 'Una changua (léase changüa) es un caldo con huevo preparado en leche. Su facilidad de preparación y lo básico de los ingredientes lo hicieron popular en los desayunos colombianos. Se consume mucho en la región andina y obviamente se le puede acompañar de arepitas o envueltos.',
    lugar: 'Changua.',
    tipo: 'gastronomia'
  },
  {
    nameSite : './assets/plato-mondongo-colombiano-aguacate-tajadas-platano.jpg',
    description: 'Su ingrediente principal es la panza animal o los callos. El mondongo es un plato típico de la comida colombiana y se le puede encontrar fácilmente en el menú del día de cualquier restaurante. La panza o tripa es cocida, cortada en trozos y acompañada de papa, verduras que varían según la región (maíz, arveja, zanahoria, etc).',
    lugar: 'Mondongo',
    tipo: 'gastronomia'
  },
  {
    nameSite : './assets/plato-pescado-bagre-frito-aguacate.jpg',
    description: 'El bagre es un pescado de agua dulce, que se encuentra en casi todo mercado de pescados en Colombia. Se le encuentra frecuentemente en los menús de restaurantes populares y se caracteriza por ser carnoso y sin espinas. Lo podrán encontrar en salsa, normalmente a base de tomate, cebolla y pimentón; o frito. Se le suele acompañar de arroz con coco y patacones.',
    lugar: 'Bagre con aguacate',
    tipo: 'gastronomia'
  },
  {
    nameSite : './assets/plato-pescado-frito-arroz-con-coco-baru-colombia.jpg',
    description: 'Siguiendo en la costa atlántica de Colombia, los llevo hasta la Isla de Barú cerca de la bella Cartagena de Indias. Allí el plato más popular es el pescado frito. En general se sirve con arroz con coco y patacones.',
    lugar: 'Arroz con coco',
    tipo: 'gastronomia'
  }

];

  constructor(public modalController: ModalController, public navParams: NavParams) { 
    this.val = this.navParams.get('value');
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
