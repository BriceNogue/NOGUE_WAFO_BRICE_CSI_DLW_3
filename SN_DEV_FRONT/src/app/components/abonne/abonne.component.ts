import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbonneModel } from 'src/app/models/abonne.model';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.scss']
})
export class AbonneComponent implements OnInit {

  abonnes: AbonneModel[];

  constructor(
    private abonneService: AbonneService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.abonneService.getAbonne().subscribe((abonnes) => 
    this.abonnes = abonnes
    );
  }

  goToAddAbonne() {
    this.router.navigate(['/add_abonne'])
  }

}
