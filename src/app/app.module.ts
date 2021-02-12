import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import  'firebase/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BudgetComponent } from './budget/budget.component';
import { CreditLettersComponent } from './credit-letters/credit-letters.component';
import { AllbudgetsComponent } from './budget/budgetlists/allbudgets/allbudgets.component';
import { LettersListComponent } from './credit-letters/allLetters/letters-list/letters-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';
import { BudgetTitlePageComponent } from './budget/budgetTitle/budget-title-page/budget-title-page.component';
// import { BudgetServiceOriginal } from './budget/budget.service.original';
import { SingleBudgetComponent } from './budget/single-budget/single-budget.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    SignUpComponent,
    SignInComponent,
    BudgetComponent,
    CreditLettersComponent,
    AllbudgetsComponent,
    LettersListComponent,
    CalendarComponent,
    SupportComponent,
    TermsComponent,
    BudgetTitlePageComponent,
    SingleBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'this-budget'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
