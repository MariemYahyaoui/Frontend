import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postTitle: string = ''; // Variable to hold the post title
  postContent: string = ''; // Variable to hold the post content
  mediaFile: File | null = null; // Variable to hold the uploaded file
  focus: boolean = false; // Focus state for title input
  focus1: boolean = false; // Focus state for content input

  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.mediaFile = input.files[0]; // Store the selected file
    }
  }

  // Method to submit the post
  submitPost(): void {
    if (!this.postTitle || !this.postContent) {
      alert('Please enter a title and content for your post.'); // Alert if title or content is empty
      return;
    }

    // Here you would typically send the post data to your backend
    const postData = {
      title: this.postTitle,
      content: this.postContent,
      media: this.mediaFile // This could be a URL to the uploaded media
    };
    console.log('Post submitted:', postData);

    // Reset the form
    this.postTitle = '';
    this.postContent = '';
    this.mediaFile = null;
  }
}