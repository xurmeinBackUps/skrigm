import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './db/in-memory-data.service';

import { AppComponent } from './app.component';
import { Oops404Component } from './site/oops404/oops404.component';
import { HomeComponent } from './site/home/home.component';
import { ScreenComponent } from './site/components/screen/screen.component';
import { PanelComponent } from './site/components/panel/panel.component';
import { RulerefComponent } from './site/components/ruleref/ruleref.component';
import { RulerefFormComponent } from './site/components/ruleref-form/ruleref-form.component';
import { PanelFormComponent } from './site/components/panel-form/panel-form.component';
import { ArchiveComponent } from './site/components/archive/archive.component';
import { RuleComponent } from './site/components/rule/rule.component';
import { RuleFormComponent } from './site/components/rule-form/rule-form.component';
import { DefinitionComponent } from './site/components/definition/definition.component';
import { DefinitionFormComponent } from './site/components/definition-form/definition-form.component';

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
    RuleFormComponent,
    DefinitionComponent,
    DefinitionFormComponent
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
