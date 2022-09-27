import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'users', component: UserListComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
