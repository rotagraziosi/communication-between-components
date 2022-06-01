import { Injectable } from '@angular/core';
import { Dog } from './models/dog';

@Injectable()
export class DogService {

  dogList: Array<Dog> = [
    {
      breed: 'Belgian Shepard',
      description: `The Belgian Shepherd (also known as the Belgian Sheepdog or the Chien de Berger Belge) is a breed of medium-sized herding dog from Belgium. While predominantly considered a single breed, it is bred in four distinct varieties based on coat type and colour; the long-haired black Groenendael, the rough-haired fawn Laekenois, the short-haired fawn Malinois, and the long-haired fawn Tervuren; in the United States the American Kennel Club considers the four varieties to be separate breeds.`,
      imageUrl: 'https://www.purina.fr/sites/default/files/styles/ttt_image_original/public/2021-02/BREED%20Hero%20Desktop_0165_belgian_shepherd_malinois.webp?itok=INGA89Rg',
      bark: 'woof woof !'
    },
    {
      breed: 'Labrador',
      description: `The Labrador Retriever or Labrador is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland (now a province of Canada), and was named after the Labrador region of that colony. It is among the most commonly kept dogs in several countries, particularly in the Western world.      `,
      imageUrl: 'https://www.wikichien.fr/wp-content/uploads/sites/4/labrador-images-photos-animal-000101_1-0.jpg',
      bark: 'waaf waaf !'
    },
    {
      breed: 'Pekingese',
      description: `The Pekingese (also spelled Pekinese) is a breed of toy dog, originating in China. The breed was favored by royalty of the Chinese Imperial court as both a lap dog and companion dog, and its name refers to the city of Peking (Beijing) where the Forbidden City is located. The breed has several characteristics and health issues related to its unique appearance. Because of its desirable characteristics, the Pekingese has been part of the development of designer crossbreeds, such as the Peekapoo (crossed with a poodle) and Peke-a-tese (crossed with a Maltese).`,
      imageUrl: 'https://www.santevet.com/upload/admin/images/article/PMO/FICHES%20RACES/CHIENS/p%C3%A9kinois_assurance_sant%C3%A9vet.jpg',
      bark: 'wif wif !'
    },
    {
      breed: 'Husky',
      description: `Husky is a general term for a dog used in the polar regions, primarily and specifically for work as sled dogs. It refers to a traditional northern type, notable for its cold-weather tolerance and overall hardiness.[1][2] Though dogs such as the AKC/CKC-registered Alaskan Malamute may not contain "Husky" in their official name, the term still encompasses dogs of their type.[citation needed] Modern racing huskies that maintain arctic breed traits (also known as Alaskan huskies) represent an ever-changing crossbreed of the fastest dogs.`,
      imageUrl: 'https://img2.storyblok.com/filters:format(webp)/f/83829/1200x628/7c3d9822c6/chien-race-husky-siberien.jpg',
      bark: 'waoooooooooooow !'
    },
    {
      breed: 'Samoyed',
      description: `The Belgian Shepherd (also known as the Belgian Sheepdog or the Chien de Berger Belge) is a breed of medium-sized herding dog from Belgium. While predominantly considered a single breed, it is bred in four distinct varieties based on coat type and colour; the long-haired black Groenendael, the rough-haired fawn Laekenois, the short-haired fawn Malinois, and the long-haired fawn Tervuren; in the United States the American Kennel Club considers the four varieties to be separate breeds.`,
      imageUrl: 'https://img2.storyblok.com/filters:format(webp)/f/83829/1200x628/e5faa875e6/comment-eduquer-samoyede.jpg',
      bark: 'woof woof !'
    },
    {
      breed: 'Belgian Shepard',
      description: `The Belgian Shepherd (also known as the Belgian Sheepdog or the Chien de Berger Belge) is a breed of medium-sized herding dog from Belgium. While predominantly considered a single breed, it is bred in four distinct varieties based on coat type and colour; the long-haired black Groenendael, the rough-haired fawn Laekenois, the short-haired fawn Malinois, and the long-haired fawn Tervuren; in the United States the American Kennel Club considers the four varieties to be separate breeds.`,
      imageUrl: 'https://www.purina.fr/sites/default/files/styles/ttt_image_original/public/2021-02/BREED%20Hero%20Desktop_0165_belgian_shepherd_malinois.webp?itok=INGA89Rg',
      bark: 'woof woof !'
    }
  ];

}
