import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCreatorComponent } from './table-creator/table-creator.component';
import { TableViewerComponent } from './table-viewer/table-viewer.component';

const routes: Routes = [
  {
    component: TableCreatorComponent,
    path: 'table-creator'
  },
  {
    component: TableViewerComponent,
    path: 'table-viewer'
  },
  {
    path: '**',
    redirectTo: 'table-creator'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
