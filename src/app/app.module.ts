import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { HeaderComponent } from './components/layout/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserListComponent, PostListComponent, HomeComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
