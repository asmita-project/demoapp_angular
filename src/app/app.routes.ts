import { Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { UsertableComponent } from './usertable/usertable.component';

export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'user',
//     pathMatch: 'full',
//   },
  {
    path: '',
    component: UsertableComponent,
  },
//   {
//     path: '',
//     component: MainlayoutComponent,
//     data: {
//       title: 'Home',
//     },
//     children: [
//       {
//         path: '',
//         component: UsertableComponent,
//       },
//       {
//         path: 'user',
//         component: UsertableComponent,
//       },
//     ],
//   },
];
