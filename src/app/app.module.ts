import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbUserModule,NbThemeModule,NbIconModule,NbTreeGridModule,NbSelectModule,NbDialogModule, NbInputModule,NbDatepickerModule, NbLayoutModule,NbSidebarModule, NbSidebarService, NbButtonModule,NbActionsModule,NbCardModule,NbMenuModule,NbListModule,NbCheckboxModule, NbTabsetModule,NbPopoverModule,} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ChartsModule } from 'ng2-charts';
import { PollDetailsComponent } from './poll-details/poll-details.component';
import { Color, Label } from 'ng2-charts';
import{HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ListViewComponent,
    PollDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbUserModule,
    NbTreeGridModule,
    NbEvaIconsModule,
    NbIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbCardModule,
    NbMenuModule,
    NbListModule,
    NbCheckboxModule,
    NbButtonModule,
    NbPopoverModule,
    NbInputModule,
    NbSelectModule,
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    
  ],
  providers: [NbSidebarService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
