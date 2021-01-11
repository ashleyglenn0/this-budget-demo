import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


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
import { NotFoundComponent } from './not-found/not-found.component';
import { BudgetTitlePageComponent } from './budget/budgetTitle/budget-title-page/budget-title-page.component';
import { CreditLettersTitleComponent } from './credit-letters/creditLettersTitle/credit-letters-title/credit-letters-title.component';
import {BudgetService} from './budget/budget.service';
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
    NotFoundComponent,
    BudgetTitlePageComponent,
    CreditLettersTitleComponent,
    SingleBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
