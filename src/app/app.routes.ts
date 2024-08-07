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
    path: 'tournament',
    loadComponent: () => import('./pages/tournament/tournament.page').then( m => m.Tournament),
  },
  {
    path: 'tournament/game-session',
    loadComponent: () => import('./pages/tournament/game-session/game-session.page').then( m => m.GameSessionPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'profile/user-match-history',
    loadComponent: () => import('./pages/profile/user-match-history/user-match-history.page').then( m => m.UserMatchHistoryPage)
  },
  {
    path: 'profile/user-stats-detail',
    loadComponent: () => import('./pages/profile/user-stats-detail/user-stats-detail.page').then( m => m.UserStatsDetailPage)
  },
  {
    path: 'modify-profile',
    loadComponent: () => import('./pages/profile/modify-profile/modify-profile.page').then( m => m.ModifyProfilePage)
  },
  {
    path: 'advanced-profile-settings',
    loadComponent: () => import('./pages/profile/advanced-profile-settings/advanced-profile-settings.page').then( m => m.AdvancedProfileSettingsPage)
  },
  {
    path: 'rules',
    loadComponent: () => import('./pages/rules/rules.page').then( m => m.RulesPage)
  }
];
