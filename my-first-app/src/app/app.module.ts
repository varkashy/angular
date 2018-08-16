import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component.';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {NormalAlertComponent} from './normal-alert/normal-alert.component';

/**
 * We define all new components and register them under @NgModule declaration
 * so angular knows they exist.
 * e.g. we will add the Server component in the declaration array
 * also note that the import has to be added at the top so as to tell
 * ts where to find this component
 */
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NormalAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  /**
   * bootstrap informs framework which components
   * it should be aware of at the time of application starts
   * so essentially which components should you recognize in the index.html file
   * Now normally we would not alter the appComponent and add new component to it
   * so we wouldnt be touching the bootstrap area
   * However we need to register the new component , in this case server component,
   * in the module, because angular will not by default scan all the files we have
   * So we register in @NgModules in the decalration array
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
