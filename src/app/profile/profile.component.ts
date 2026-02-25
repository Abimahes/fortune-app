import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  name= ''
  isSave = false;
  save(){
    this.isSave =  true;
    alert('Profile Updated')
  }

  canDeactivate():any{
    if(!this.isSave ) {

    } else {
      
    }
  }
}
