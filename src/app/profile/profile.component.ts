// import { AuthService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  user: { name: string; lastName: string; age: number } | null = null; // Variable to hold user data

//   constructor(private authservice: AuthService) { }

  ngOnInit() {
    // this.user = this.authservice.getUser (); // Retrieve user data on component initialization
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement; // Get the input element
    if (input.files && input.files[0]) { // Check if a file is selected
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onload = (e) => {
        this.imageUrl = e.target?.result; // Set the image URL to display
      };
      reader.readAsDataURL(input.files[0]); // Read the file as a data URL
    }
  }
}