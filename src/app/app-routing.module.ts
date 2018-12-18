import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { FlexboxComponent } from './example/flexbox/flexbox.component';
import { AuthGuard } from './services/auth.guard';
import { InboundSeaFreightDOGeneralComponent } from './inbound-sea-freight-do-general/inbound-sea-freight-do-general.component';
import { InboundSeaFreightDOPartiesComponent } from './inbound-sea-freight-do-parties/inbound-sea-freight-do-parties.component';
import { InboundSeaFreightDORoutingComponent } from './inbound-sea-freight-do-routing/inbound-sea-freight-do-routing.component';
import { InboundSeaFreightDOCargoComponent } from './inbound-sea-freight-do-cargo/inbound-sea-freight-do-cargo.component';
import { InboundSeaFreightDOCommunicationComponent } from './inbound-sea-freight-do-communication/inbound-sea-freight-do-communication.component';
import { InboundSeaFreightDOComponent } from './inbound-sea-freight-do/inbound-sea-freight-do.component';
import { InboundSeaFreightDOListComponent } from './inbound-sea-freight-do-list/inbound-sea-freight-do-list.component';

const routes: Routes = [
{ path:'', component: InboundSeaFreightDOListComponent },
{ path:'inbound-sea-freightDO-list', component: InboundSeaFreightDOListComponent },
{ path:'inbound-sea-freightDO', component: InboundSeaFreightDOComponent },
{ path:'inbound-sea-freightDO-general', component: InboundSeaFreightDOGeneralComponent },
{ path:'inbound-sea-freightDO-parties', component: InboundSeaFreightDOPartiesComponent },
{ path:'inbound-sea-freightDO-routing', component: InboundSeaFreightDORoutingComponent },
{ path:'inbound-sea-freightDO-cargo', component: InboundSeaFreightDOCargoComponent },
{ path:'inbound-sea-freightDO-communication', component: InboundSeaFreightDOCommunicationComponent },

{ path:'signup', component: SignupComponent },
{ path:'login', component: LoginComponent },
{ path:'training', component: TrainingComponent, canActivate: [AuthGuard] },
{ path:'flexbox', component: FlexboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
