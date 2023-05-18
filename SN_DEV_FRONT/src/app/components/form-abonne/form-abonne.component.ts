import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbonneModel } from 'src/app/models/abonne.model';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-form-abonne',
  templateUrl: './form-abonne.component.html',
  styleUrls: ['./form-abonne.component.scss']
})
export class FormAbonneComponent implements OnInit {

  @Input() abonne: AbonneModel;
  title: string ="";
  isAddForm: boolean;
  constructor(
    private router: Router,
    private serviceAbonne: AbonneService
  ) { }

  ngOnInit(): void {
    if (this.isAddForm) {
      this.title = 'Ajouter abonne'
    } else {
      this.title = 'Editer Abonne: ' + this.abonne.nom;
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.serviceAbonne.addAbonne(this.abonne)
        .subscribe((abonne: AbonneModel) => this.router.navigate(['/users']));
    } else {
      this.serviceAbonne.updatateAbonne(this.abonne)
        .subscribe(() => this.router.navigate(['/users', this.abonne.id]));
    }
  }

}
