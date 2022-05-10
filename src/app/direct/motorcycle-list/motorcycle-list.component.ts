import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../models/motorcycle';

@Component({
  selector: 'app-motorcycle-list',
  templateUrl: './motorcycle-list.component.html',
  styleUrls: ['./motorcycle-list.component.scss']
})
export class MotorcycleListComponent implements OnInit {

  list: Array<Motorcycle> = [
    {
      brand: 'Ducati',
      model: 'Monster 821',
      power: 109,
      imageUrl: 'https://media.ducati.com/img/mon/m_821/r/ee/mon-m_821-r-prfpst-ee-01-101.png?p=mon-m_821-r-&f=img%2Fmon%2Fm_821%2Fr%2Fee&c=_bike-ee-01-100+_silnzt-ee-01-099+_keyblk-ee-01-045+_specct-ee-01-040+_prfant-ee-01-035+_inddir-ee-01-025+_portar-ee-01-010+resize=1920%3A%2A',
      description: `The Ducati Monster (called Il Mostro in Italian[4]) is a standard, or naked bike, motorcycle designed by Miguel Angel Galluzzi and produced by Ducati in Bologna, Italy, since 1993.[1][2][3] In 2005, Monster sales accounted for over half of Ducati's worldwide sales. Like most modern Ducati motorcycles, it has a 90° V-twin engine, called an L-twin by Ducati, with desmodromic valves, and tubular steel trellis frame, designed by Fabio Taglioni (1920–2001).`,
      source: 'https://en.wikipedia.org/wiki/Ducati_Monster'
    },
    {
      brand: 'Yamaha',
      model: 'XJ6',
      power: 78,
      imageUrl: 'http://www2.yamaha-motor.fr/actu/IMG/jpg/2013-yamaha-xj6-bwc1-stu-001-1920w.jpg',
      description: `In 2009 Yamaha re-launched the Diversion line in the form of the XJ6 Diversion, XJ6 N and XJ6 Diversion F. The former has a half-fairing while the N version is a naked motorcycle. The fully faired FZ6R is the American equivalent to the European XJ6 Diversion F model with the exception of not having the ABS and electronic immobilizer. The engine is a detuned Fazer engine and both versions are offered with optional ABS braking. The new line has upgraded to a liquid-cooled 16 valve 4-stroke forward-inclined parallel 4-cylinder engine developing 78 horsepower (57 kW) / 59.7 Nm. Yamaha has kept the engine displacement at 600cc for the new Diversion line.[2]`,
      source: 'https://en.wikipedia.org/wiki/Yamaha_Diversion'
    },
    {
      brand: 'Kawasaki',
      model: 'H2R',
      power: 319,
      imageUrl: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19ZX1000Y_201GY3DRS1CG_A.png',
      description: `The Kawasaki Ninja H2 is a "supercharged supersport" class[8] motorcycle in the Ninja sportbike series, manufactured by Kawasaki Heavy Industries, featuring a variable-speed centrifugal-type supercharger.[9][10][11][12] The track-only variant is called Ninja H2R, and it is the fastest and most powerful production motorcycle on the market; it produces a maximum of 310 horsepower (230 kW) and 326 horsepower (243 kW) with ram air.[1] The H2R has 50% more power than the fastest street-legal motorcycles, while the street-legal Ninja H2 has a lower power output of 200 hp (150 kW)[13]–210 hp (160 kW) with ram air.[1]`,
      source: 'https://en.wikipedia.org/wiki/Kawasaki_Ninja_H2'
    },
    {
      brand: 'Ducati',
      model: '916',
      power: 114,
      imageUrl: 'https://www.motoplanete.com/ducati/zoom-700px/Ducati-955-SPa-1996-700px.webp',
      description: `The Ducati 916 is a fully faired sport bike made by Ducati from 1994 to 1998.[a] Featuring a 916 cc (56 cu in) fuel injected, 4-valve, desmo, liquid-cooled, 90° V-twin engine in a trellis frame with a single-sided swingarm and USD forks, the 916 is frequently cited as one of the most beautiful motorcycles ever.`,
      source: 'https://en.wikipedia.org/wiki/Ducati_916'
    },
    {
      brand: 'Honda',
      model: 'CB 750 Four',
      power: 67,
      imageUrl: 'https://bellesmachines.com/wp-content/uploads/2018/11/01-honda-cb-750-four-1200.jpg',
      description: 'The Honda CB750 is an air-cooled, transverse, in-line four-cylinder engine motorcycle made by Honda over several generations for year models 1969–2003 as well as 2007 with an upright or standard riding posture. It is often called the original Universal Japanese Motorcycle (UJM).',
      source: 'https://en.wikipedia.org/wiki/Honda_CB750'
    },
    {
      brand: 'Suzuki',
      model: 'Hayabusa',
      power: 173,
      imageUrl: 'https://media.motoservices.com/media/cache/vehicle_detail/media/vehicle/2531/gsx-r-1300-rr.jpg',
      description: `The Suzuki GSX1300R Hayabusa is a sports motorcycle made by Suzuki since 1999. It immediately won acclaim as the world's fastest production motorcycle, with a top speed of 303 to 312 km/h (188 to 194 mph).`,
      source: 'https://en.wikipedia.org/wiki/Suzuki_Hayabusa'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onVroom(value: string): void {
    alert(value);
  }

}
