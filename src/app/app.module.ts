import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './pages/create/createcomponent';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { ConfirmationDialogComponent } from './utils/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    DetailsComponent,
    EditComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
