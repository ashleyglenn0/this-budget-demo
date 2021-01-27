import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { SingleBudgetComponent } from './budget/single-budget/single-budget.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'creditRepair', component: CreditLettersComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'support', component: SupportComponent },
  { path: 'budgetList', component: AllbudgetsComponent },
  { path: 'allLetters', component: LettersListComponent },
  { path: 'terms', component: TermsComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'budgetTitle', component: BudgetTitlePageComponent},
  { path: 'budget/:id', component: BudgetComponent },
  { path: 'singleBudgetPage/:id', component: SingleBudgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
