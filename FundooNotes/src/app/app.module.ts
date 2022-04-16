import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { IconsComponent } from './components/icons/icons.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TrashComponent } from './components/trash/trash.component';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthguardserviceService } from './authguardservice.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    ForgetpassComponent,
    ResetpassComponent,
    DashboardComponent,
    GetallnotesComponent,
    TakenoteComponent,
    DisplaynoteComponent,
    IconsComponent,
    UpdateComponent,
    TrashComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,FlexLayoutModule,
    HttpClientModule,ReactiveFormsModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatCardModule,
    FormsModule,MatDialogModule,MatSelectModule,MatMenuModule
  ],
  providers: [

    AuthguardserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
