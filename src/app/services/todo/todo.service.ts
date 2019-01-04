import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  getAll(){
    return [
      { desc : 'Buy some apples', done : false },
      { desc : 'Clean my room', done : true },
      { desc : 'Read the newspaper', done : false },
    ];
  }

}
