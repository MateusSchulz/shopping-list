import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lists'
  },
  {
    path: 'lists',
    loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
