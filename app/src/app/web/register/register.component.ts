import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient,private Route:Router ){}
 
  RegisterDto={
    nom:"",
    prenom:"",
    email:"",
    password:""

  }
  registrationForm = this.fb.group({
    nom : ['', Validators.required],
    prenom : ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@actia-engineering\.com$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  
  ngOnInit(): void {
    
  }
  OnSubmit(){
    const formData = this.registrationForm.value;
    const registerDto = {
      firstName: formData.nom,
      lastName: formData.prenom,
      email: formData.email,
      password: formData.password};
    this.http.post('http://localhost:8080/api/auth/register', registerDto).subscribe(
      response => {console.log('User registered successfully');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compte crée',
        showConfirmButton: false,
        timer: 1500
      });
      this.Route.navigate(['/login']);
    },
     
      error => {console.error('Error registering user', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Un compte avec cette adresse email existe déja',
       
      })}
    );
  }




}
