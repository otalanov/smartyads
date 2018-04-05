/**
 * @Author Shankar Morwal
 * Router file. Every module will have their own routers.
 */
import { Routes } from '@angular/router';
import { HomeRoutes } from './home/index';
export const routes: Routes = [
  ...HomeRoutes
];
