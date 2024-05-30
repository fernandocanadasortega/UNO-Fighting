import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./pages/auth/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
    children: [
      {
        path: '',
        redirectTo: 'tournaments-list',
        pathMatch: 'full',
      },
      {
        path: 'tournaments-list',
        loadComponent: () => import('./pages/tournaments-list/tournaments-list.page').then( m => m.TournamentsList)
      },
      {
        path: 'new-tournament',
        loadComponent: () => import('./pages/new-tournament/new-tournament.page').then( m => m.NewTournamentPage)
      },
      {
        path: 'search-tournament',
        loadComponent: () => import('./pages/search-tournament/search-tournament.page').then( m => m.SearchTournament)
      },
      {
        path: 'rules',
        loadComponent: () => import('./pages/rules/rules.page').then( m => m.RulesPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
      },
    ]
  },
  {
    path: 'profile/user-data',
    loadComponent: () => import('./pages/profile/user-data/user-data.page').then( m => m.UserDataPage)
  },
  {
    path: 'profile/user-stats',
    loadComponent: () => import('./pages/profile/user-stats/user-stats.page').then( m => m.UserStatsPage)
  },
  {
    path: 'profile/bug-report',
    loadComponent: () => import('./pages/profile/bug-report/bug-report.page').then( m => m.BugReportPage)
  },

];
