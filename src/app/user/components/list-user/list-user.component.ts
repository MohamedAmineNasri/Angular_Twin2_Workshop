import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  category: string = '';
  maclasse = 'cl1';

  //rakiz fiha
  //ActivatedRoute howa service
  constructor(private ac: ActivatedRoute) {
    console.log('constactor');
  }

  //method hook qui fait partie du cycle de vie d'un composant
  //appele automatiqument apres la creation du composant
  //to initialize the object
  ngOnInit() {
    //Activated Route : service prédéficie  => Extraire les values des parameters =>((snapshot), (paraMap /queryParam))
    //paramap kin fih url 1/2/Admin
    //queryparamap ki yabda url ?id=...&cat=...

    //snapshot capture de ecran lil url ili jito
    console.log(this.ac.snapshot.params['category']);
    console.log('initialition of ListUserComponent');

    //---------------Start Snapshot---------------
    //snapshot capture de ecran lil url ili jito
    //hiya synchrone
    //mochklitha lazim t reload page ta9if fih valeur lowla
    //this.category = this.ac.snapshot.params['category'];
    //---------------End Snapshot---------------

    //---------------Start paraMap---------------
    //hiya fonction fih wasit service tab9a t3is 3la url
    //Traj3 Observable 3la 7aja => collection des doones
    //kol matitbadil valeur titba3ath bich tab3thlik valeur jdod
    //hiya asynchrone
    this.ac.paramMap.subscribe((res) => (this.category = res.get('category')));
    //---------------End paraMap-----------------
  }

  list: User[] = [
    {
      id: 1,
      firstName: 'Mila',
      lastName: ' Kunis',
      birthDate: '1999-06-30',
      accountCategory: 'Admin',
      email: 'mila@kunis.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      profession: 'Software Engineer',
    },
    {
      id: 2,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      profession: 'Software Engineer',
    },
    {
      id: 3,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      profession: 'Software Engineer',
    },
    {
      id: 4,
      firstName: 'Ryan',
      lastName: 'Gossling',
      birthDate: '1999-06-30',
      accountCategory: 'Golden',
      email: 'Ryan@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      profession: 'Software Engineer',
    },
    {
      id: 5,
      firstName: 'Robert',
      lastName: 'Downey',
      birthDate: '1999-06-30',
      accountCategory: 'Blocked Account',
      email: 'robert@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      profession: 'Software Engineer',
    },
  ];

  delete(pos: number) {
    this.list.splice(pos, 1);
  }
}
