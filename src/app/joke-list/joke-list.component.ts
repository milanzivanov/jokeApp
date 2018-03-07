import { Component, OnInit } from '@angular/core';
import { Joke } from '../jokeclass';

@Component({
  selector: 'app-joke-list',
  template: `
  <app-joke-form (jokeCreated)="addJoke($event)"></app-joke-form>
  <app-joke *ngFor="let j of jokes" 
            [joke]="j" (jokeDeliting)="deleteJoke($event)">
  </app-joke>

  `,
  styles: []
})

export class JokeListComponent implements OnInit {

    jokes: Joke[];
    
    constructor() {
      this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
      ];
    }

    ngOnInit() {
    }

    addJoke(joke) {
         this.jokes.unshift(joke);
    }

  /*
  TODO: Flesh out the below function to actually delete a joke from the list. Have the function called when the user clicks the delete button.
  */
    deleteJoke(joke) {
        let indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete, 1);
        }
    }

}
