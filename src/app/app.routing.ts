import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentDetailsComponent } from './components/department.detail.component';
import { DepartmentsComponent } from './components/departments.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DepartmentsComponent
    },
    {
        path: 'department/:id',
        component: DepartmentDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
