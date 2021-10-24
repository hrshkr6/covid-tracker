import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let appRoutes: Routes =[
  //  {path:"", component:AppComponent,children:[
  //    {path:'state_nav',component:StatesNavComponent,children:[
  //      {path:'state_data',component:StateDataComponent}
  //    ]}
  //  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
