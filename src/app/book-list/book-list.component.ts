import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Books } from '../books';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public booksData: any;
  constructor(private booksService:BooksService,
    private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks(){
    this.booksService.getBooklist().subscribe(data =>{
      this.booksData=data;
      console.log(this.booksData);
    })
  }
  updateBook(bookId:number){
    this.router.navigate(['update-book',bookId]);
  }

}