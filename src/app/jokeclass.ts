export class Joke {
    setup: string;
    punchline: string;
    hide: boolean;
    // domain model

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    
    toggle() {
        this.hide = !this.hide;
    }

    // removeJoke(i) {
    //     console.log("test12345");
    // }
}