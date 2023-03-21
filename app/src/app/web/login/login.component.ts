import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
ngOnInit(): void {}
constructor(private _ser:LoginServiceService,private router:Router){}
UserData={
  email:'',
  password:''
}

onSubmit(){
  this._ser.login(this.UserData)

  .subscribe(
    response => {
      console.log('Bienvenue,', response);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logged',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/home']);
    },
    error => {
      console.log('Erreur de connexion:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez vérifier vos coordonnées',
       
      })
      // Affichez un message d'erreur à l'utilisateur ici
    }
  );
}

}
