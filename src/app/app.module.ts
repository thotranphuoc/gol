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
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

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
import { InboundSeaFreightDoCargoEditComponent } from './inbound-sea-freight-do-cargo-edit/inbound-sea-freight-do-cargo-edit.component';
import { InboundSeaFreightDoGeneralSearchFilejobnoComponent } from './inbound-sea-freight-do-general-search-filejobno/inbound-sea-freight-do-general-search-filejobno.component';
import { InboundSeaFreightDoPartiesShipperSearchCodeComponent } from './inbound-sea-freight-do-parties-shipper-search-code/inbound-sea-freight-do-parties-shipper-search-code.component';
import { InboundSeaFreightDoPartiesConsigneeSearchCodeComponent } from './inbound-sea-freight-do-parties-consignee-search-code/inbound-sea-freight-do-parties-consignee-search-code.component';
import { InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent } from './inbound-sea-freight-do-parties-actual-consignee-search-code/inbound-sea-freight-do-parties-actual-consignee-search-code.component';
import { InboundSeaFreightDoPartiesBillToSearchCodeComponent } from './inbound-sea-freight-do-parties-bill-to-search-code/inbound-sea-freight-do-parties-bill-to-search-code.component';
import { InboundSeaFreightDoRoutingOriginalCodeSearchComponent } from './inbound-sea-freight-do-routing-original-code-search/inbound-sea-freight-do-routing-original-code-search.component';
import { InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent } from './inbound-sea-freight-do-routing-port-of-loading-code-search/inbound-sea-freight-do-routing-port-of-loading-code-search.component';
import { InboundSeaFreightDoRoutingDischargeCodeSearchComponent } from './inbound-sea-freight-do-routing-discharge-code-search/inbound-sea-freight-do-routing-discharge-code-search.component';
import { InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent } from './inbound-sea-freight-do-routing-place-of-delivery-code-search/inbound-sea-freight-do-routing-place-of-delivery-code-search.component';
import { InboundSeaFreightDoListShipperSearchComponent } from './inbound-sea-freight-do-list-shipper-search/inbound-sea-freight-do-list-shipper-search.component';
import { InboundSeaFreightDoListCneeSearchComponent } from './inbound-sea-freight-do-list-cnee-search/inbound-sea-freight-do-list-cnee-search.component';
import { InboundSeaFreightDoListCarrierSearchComponent } from './inbound-sea-freight-do-list-carrier-search/inbound-sea-freight-do-list-carrier-search.component';
import { InboundSeaFreightDoListHandlingAgentSearchComponent } from './inbound-sea-freight-do-list-handling-agent-search/inbound-sea-freight-do-list-handling-agent-search.component';
import { InboundSeaFreightDoListCargoSourceSearchComponent } from './inbound-sea-freight-do-list-cargo-source-search/inbound-sea-freight-do-list-cargo-source-search.component';
import { InboundSeaFreightDoListSalesmanSearchComponent } from './inbound-sea-freight-do-list-salesman-search/inbound-sea-freight-do-list-salesman-search.component';
import { InboundSeaFreightDoListPortOfReceiptSearchComponent } from './inbound-sea-freight-do-list-port-of-receipt-search/inbound-sea-freight-do-list-port-of-receipt-search.component';
import { InboundSeaFreightDoListPortOfLoadingSearchComponent } from './inbound-sea-freight-do-list-port-of-loading-search/inbound-sea-freight-do-list-port-of-loading-search.component';
import { InboundSeaFreightDoListPortOfDischargeSearchComponent } from './inbound-sea-freight-do-list-port-of-discharge-search/inbound-sea-freight-do-list-port-of-discharge-search.component';
import { InboundSeaFreightDoListFinalDestinationSearchComponent } from './inbound-sea-freight-do-list-final-destination-search/inbound-sea-freight-do-list-final-destination-search.component';

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
    InboundSeaFreightDoListTableComponent,
    InboundSeaFreightDoCargoEditComponent,
    InboundSeaFreightDoGeneralSearchFilejobnoComponent,
    InboundSeaFreightDoPartiesShipperSearchCodeComponent,
    InboundSeaFreightDoPartiesConsigneeSearchCodeComponent,
    InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent,
    InboundSeaFreightDoPartiesBillToSearchCodeComponent,
    InboundSeaFreightDoRoutingOriginalCodeSearchComponent,
    InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent,
    InboundSeaFreightDoRoutingDischargeCodeSearchComponent,
    InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent,
    InboundSeaFreightDoListShipperSearchComponent,
    InboundSeaFreightDoListCneeSearchComponent,
    InboundSeaFreightDoListCarrierSearchComponent,
    InboundSeaFreightDoListHandlingAgentSearchComponent,
    InboundSeaFreightDoListCargoSourceSearchComponent,
    InboundSeaFreightDoListSalesmanSearchComponent,
    InboundSeaFreightDoListPortOfReceiptSearchComponent,
    InboundSeaFreightDoListPortOfLoadingSearchComponent,
    InboundSeaFreightDoListPortOfDischargeSearchComponent,
    InboundSeaFreightDoListFinalDestinationSearchComponent
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
    HttpClientModule,
    MatSelectModule
  ],
  providers: [{ provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: [] }

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    StopTrainingCompoent,
    InboundSeaFreightDOGeneralEditComponent,
    InboundSeaFreightDoPartiesEditComponent,
    InbountSeaFreightDoRoutingEditComponent,
    InboundSeaFreightDoGeneralSearchFilejobnoComponent,
    InboundSeaFreightDoPartiesShipperSearchCodeComponent,
    InboundSeaFreightDoPartiesConsigneeSearchCodeComponent,
    InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent,
    InboundSeaFreightDoPartiesBillToSearchCodeComponent,
    InboundSeaFreightDoRoutingOriginalCodeSearchComponent,
    InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent,
    InboundSeaFreightDoRoutingDischargeCodeSearchComponent,
    InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent,
    InboundSeaFreightDoListShipperSearchComponent,
    InboundSeaFreightDoListCneeSearchComponent,
    InboundSeaFreightDoListCarrierSearchComponent,
    InboundSeaFreightDoListHandlingAgentSearchComponent,
    InboundSeaFreightDoListCargoSourceSearchComponent,
    InboundSeaFreightDoListSalesmanSearchComponent,
    InboundSeaFreightDoListPortOfReceiptSearchComponent,
    InboundSeaFreightDoListPortOfLoadingSearchComponent,
    InboundSeaFreightDoListPortOfDischargeSearchComponent,
    InboundSeaFreightDoListFinalDestinationSearchComponent
  ],

})
export class AppModule { }