import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbonneModel } from 'src/app/models/abonne.model';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-edit-abonne',
  templateUrl: './edit-abonne.component.html',
  styleUrls: ['./edit-abonne.component.scss']
})
export class EditAbonneComponent implements OnInit {
  abonne: AbonneModel | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private abonneService: AbonneService,

  ) { }

  ngOnInit(): void {
    const abonneId: string|null = this.route.snapshot.paramMap.get('id');
    if(abonneId) {
      this.abonneService.updatateAbonne(this.abonne!).subscribe(abonne => this.abonne = abonne);
    }else{
      this.abonne = undefined;
    }
  }

}
