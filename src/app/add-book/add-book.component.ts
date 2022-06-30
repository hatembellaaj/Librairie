import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Books= new Books();
  constructor(private booksService:BooksService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveBook(){
    this.booksService.addBook(this.book).subscribe(data =>{
      console.log(data);
      this.goToBookList()},
    error => console.log(error));
  }
  goToBookList(){
    this.router.navigate(['/book']);
  }
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }
}
