import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    invalidCredentialMsg: string = ''; 
    loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            username: [''], 
            password: ['']  
        });
    }

    onFormSubmit(): void {
        const uname = this.loginForm.value.username;
        const pwd = this.loginForm.value.password;

        this.loginService.isUserAuthenticated(uname, pwd).subscribe({
            next: (authenticated) => {
                if (authenticated) {
                    this.router.navigate(['/list']);
                } else {
                    this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
                }
            }
        });
    }
}
