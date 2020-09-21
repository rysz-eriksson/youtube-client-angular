import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { SortBarComponent } from './components/header/sort-bar/sort-bar.component';
import { ProfileComponent } from './components/header/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicationMark } from './directives/publication-mark.directive';
import { FilterPipe } from './components/search-results/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './components/search-results/sort.pipe';
import { SearchListComponent } from './components/search-list/search-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchBarComponent,
    SortBarComponent,
    ProfileComponent,
    PublicationMark,
    FilterPipe,
    SortPipe,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
