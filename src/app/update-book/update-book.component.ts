import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Books } from '../books';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookId!: number;
  book:Books =new Books();
  constructor(private booksService:BooksService,
    private route :ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.bookId=this.route.snapshot.params['id']
    this.booksService.getBookById(this.bookId).subscribe(data =>{
      this.book=data;

    },error => console.log(error));
  }
  goToBookList(){
    this.router.navigate(['/book']);
  }
  onSubmit(){
    this.booksService.updateBook(this.bookId,this.book).subscribe(data =>{
      this.goToBookList();
    },
    error => console.log(error));
    }
}
