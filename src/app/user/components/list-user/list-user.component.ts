import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private ac: ActivatedRoute,private us:UserService) {
    console.log('constactor');
    console.log('je suis serive baby');
    
  }

  //method hook qui fait partie du cycle de vie d'un composant
  //appele automatiqument apres la creation du composant
  //to initialize the object
  ngOnInit() {
    //this.list=this.us.getAllUsers();
    this.us.getUserFromOb().subscribe((res) => (this.list = res)); //subscribe :Executing an Observable

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

  ];

  delete(pos: number) {
    this.list.splice(pos, 1);
  }
  addUser(){
    let u =new User();
    u.firstName="f1";
    u.lastName="l1";
    this.us.addUser(u).subscribe();
  }
}
