import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nomPrenom: string = '';
  adresse: string = '';
  numero: string = '';
  email: string = '';
  motDePasse: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nomPrenom = params['nomPrenom'];
      this.adresse = params['adresse'];
      this.numero = params['numero'];
      this.email = params['email'];
      this.motDePasse = params['motDePasse'];
    });
    
  }

}
