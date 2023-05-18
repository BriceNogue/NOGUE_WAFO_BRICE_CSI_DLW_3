import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbonneModel } from 'src/app/models/abonne.model';

@Component({
  selector: 'app-add-abonne',
  templateUrl: './add-abonne.component.html',
  styleUrls: ['./add-abonne.component.scss']
})
export class AddAbonneComponent implements OnInit {

  abonne: AbonneModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.abonne = new AbonneModel();
  }

  goToAbonne(){
    this.router.navigate(['/abonnes']);
  }

}
