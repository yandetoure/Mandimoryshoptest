import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage{
  nomPrenom: string = '';
  adresse: string = '';
  numero: string = '';
  email: string = '';
  motDePasse: string = '';
  constructor(private router: Router) {}

  afficherProfil() {
    this.router.navigate(['/tabs/tab1'], {
      queryParams: {
        nomPrenom: this.nomPrenom,
        adresse: this.adresse,
        numero: this.numero,
        email: this.email,
      },
    });
  }
}