import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './db/in-memory-data.service';

import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { PanelComponent } from './components/panel/panel.component';
import { RulerefComponent } from './components/ruleref/ruleref.component';
import { RulerefFormComponent } from './components/ruleref-form/ruleref-form.component';
import { PanelFormComponent } from './components/panel-form/panel-form.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { Oops404Component } from './oops404/oops404.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatTabsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import { RuleComponent } from './components/rule/rule.component';
import { RuleFormComponent } from './components/rule-form/rule-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    PanelComponent,
    RulerefComponent,
    RulerefFormComponent,
    PanelFormComponent,
    ArchiveComponent,
    Oops404Component,
    HomeComponent,
    RuleComponent,
    RuleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
