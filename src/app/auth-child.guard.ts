import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
 const router = inject(Router);
 const isLoggedIn = localStorage.getItem('loggedIn');
 if(isLoggedIn === 'true'){
  return true;
 } else{
   router.navigate(['/login'])
   return false;
 }
};
