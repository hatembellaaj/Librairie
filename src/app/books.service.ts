import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Books } from './books'
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  constructor(private http: HttpClient) { }
  getBooklist(): Observable<any> {
    return this.http.get('http://localhost:8080/book')
 }
 addBook(book: Books): Observable<any> {
  return this.http.post('http://localhost:8080/books',book )
}
getBookById(bookId:number): Observable<any>{
return this.http.get('http://localhost:8080/book/'+bookId.toString());
}
updateBook(bookId:number, book:Books):Observable<object>{
  return this.http.put('http://localhost:8080/books',book)
}
}
