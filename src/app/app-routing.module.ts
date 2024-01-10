import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";

const invalidRoute: Route = {
  path: "**",
  redirectTo: "/employee"
}

const employeeListRoute: Route = {
  path: 'employee',
  component: EmployeeListComponent
}

const employeeDetailsRoute: Route = {
  path: 'employee/:id',
  component: EmployeeDetailsComponent
}

const routes: Routes = [
  employeeDetailsRoute,employeeListRoute, invalidRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
