import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';


import { MaterialModule } from '../shares/material.module';
import { ExampleMaterialComponent } from './example-material/example-material.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexboxComponent } from './example/flexbox/flexbox.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

// import * as firebase from 'firebase';
import { firebaseConf } from 'src/unshares/firebase.config';
import { StopTrainingCompoent } from './training/current-training/stop-trainig.component';
import { GeneralComponent } from './general/general.component';
import { InboundSeaFreightDOPartiesComponent } from './inbound-sea-freight-do-parties/inbound-sea-freight-do-parties.component';
import { InboundSeaFreightDOGeneralComponent } from './inbound-sea-freight-do-general/inbound-sea-freight-do-general.component';
import { InboundSeaFreightDORoutingComponent } from './inbound-sea-freight-do-routing/inbound-sea-freight-do-routing.component';
import { InboundSeaFreightDOCargoComponent } from './inbound-sea-freight-do-cargo/inbound-sea-freight-do-cargo.component';
import { InboundSeaFreightDOCommunicationComponent } from './inbound-sea-freight-do-communication/inbound-sea-freight-do-communication.component';
import { InboundSeaFreightDOComponent } from './inbound-sea-freight-do/inbound-sea-freight-do.component';
import { InbountSeaFreightDoRoutingEditComponent } from './inbount-sea-freight-do-routing-edit/inbount-sea-freight-do-routing-edit.component';
import { InboundSeaFreightDOGeneralEditComponent } from './inbound-sea-freight-do-general-edit/inbound-sea-freight-do-general-edit.component';
import { InboundSeaFreightDoPartiesEditComponent } from './inbound-sea-freight-do-parties-edit/inbound-sea-freight-do-parties-edit.component';
import { InboundSeaFreightDOListComponent } from './inbound-sea-freight-do-list/inbound-sea-freight-do-list.component';
import { InboundSeaFreightDoListTableComponent } from './inbound-sea-freight-do-list-table/inbound-sea-freight-do-list-table.component';
import { HttpClientModule } from '@angular/common/http';

// var app = firebase.initializeApp(firebaseConf);

const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 297px)',
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent,
    ExampleMaterialComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    FlexboxComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingCompoent,
    GeneralComponent,
    InboundSeaFreightDOPartiesComponent,
    InboundSeaFreightDOGeneralComponent,
    InboundSeaFreightDORoutingComponent,
    InboundSeaFreightDOCargoComponent,
    InboundSeaFreightDOCommunicationComponent,
    InboundSeaFreightDOComponent,
    InbountSeaFreightDoRoutingEditComponent,
    InboundSeaFreightDOGeneralEditComponent,
    InboundSeaFreightDoPartiesEditComponent,
    InboundSeaFreightDOListComponent,
    InboundSeaFreightDoListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    MatStepperModule,
    MatDialogModule,
    MatListModule,
  MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [{provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true}],
  bootstrap: [AppComponent],
  entryComponents:[
    StopTrainingCompoent,
    InboundSeaFreightDOGeneralEditComponent,
    InboundSeaFreightDoPartiesEditComponent
  ],
  
})
export class AppModule { }