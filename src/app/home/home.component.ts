import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private authService : AuthService,){

  }


  username = localStorage.getItem('username');
  fortuneMessage = '';

  fortunes: string[] = [
    "Today is your lucky day! 🌟",
    "A new opportunity is coming your way 🚀",
    "Believe in yourself and magic will happen ✨",
    "Success is closer than you think 💎",
    "Smile! Good news is on the way 😊",
    "Hard work will pay off soon 🔥"
  ];

  ngOnInit(): void {
    this.generateFortune();
  }

  generateFortune() {
    // const randomIndex = Math.floor(Math.random() * this.fortunes.length);
    // this.fortuneMessage = this.fortunes[randomIndex];
    this.authService.getFortune().subscribe((res: any) => {
      console.log("fortune",res)
      // ZenQuotes API response example
      this.fortuneMessage = res[0]?.q + ' — ' + res[0]?.a;
    });
  }

  logout(){
    
  }
}
