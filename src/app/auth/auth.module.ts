import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [
  {
    path: 'sign-up',
    component: AuthPageComponent,
  }
];

const materialModules = [
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
];


@NgModule({
  declarations: [
    AuthPageComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ...materialModules,
  ]
})
export class AuthModule { }
