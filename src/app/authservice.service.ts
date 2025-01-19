// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private user: { name: string; lastName: string; age: number } | null = null;

//   // Simulate login and store user data
//   login(name: string, lastName: string, age: number): void {
//     this.user = { name, lastName, age };
//     localStorage.setItem('user', JSON.stringify(this.user));
//   }

//   // Method to get user data
//   getUser (): { name: string; lastName: string; age: number } | null {
//     if (!this.user) {
//       const userData = localStorage.getItem('user');
//       this.user = userData ? JSON.parse(userData) : null;
//     }
//     return this.user;
//   }
// }