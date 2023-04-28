const rxjs = require("rxjs")

rxjs.fromEvent( document.querySelector(""), "keyup")
    .pipe(
        rxjs.map(event => event.target.value),
    )
    .subscribe()