import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Joke } from '../jokeclass';

@Component({
  selector: 'app-joke',
  template:
  `
    <div class="card card-block">
        <h4 class="card-title">
            <ng-content select=".setup"></ng-content>
        </h4>
        <p class="card-text"
        [hidden]="joke.hide">
            <ng-content select=".punchline"></ng-content>
        </p>
        <a (click)="joke.toggle()"
        class="btn btn-warning">
            Tell Me
        </a>
        <a class="btn btn-danger" 
           (click)="deleteJoke(joke)">
          Delete
        </a> 
    </div>
  `,
  styles: []
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;
  @Output() jokeDeliting = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

    /*
  TODO: Flesh out the below function to actually delete a joke from the list. Have the function called when the user clicks the delete button.
  */
 deleteJoke(joke) {

    this.jokeDeliting.emit(joke);
}

}
