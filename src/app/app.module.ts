import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { PanelComponent } from './components/panel/panel.component';
import { RulerefComponent } from './components/ruleref/ruleref.component';
import { RulerefFormComponent } from './components/ruleref-form/ruleref-form.component';
import { PanelFormComponent } from './components/panel-form/panel-form.component';
import { ArchiveComponent } from './components/archive/archive.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatTabsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    PanelComponent,
    RulerefComponent,
    RulerefFormComponent,
    PanelFormComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
