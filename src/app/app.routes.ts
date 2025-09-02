import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { DisplayEmployeesComponent } from './pages/display-employees/display-employees.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent,
                children: [
                    {
                        path: 'add-new-employee',
                        component: NewEmployeeComponent
                    }, {
                        path: 'display-employees',
                        component: DisplayEmployeesComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
