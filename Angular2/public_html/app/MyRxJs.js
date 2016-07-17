/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//const source = Rx.Observable
//        .interval(1000)
//        .take(5);

//source.subscribe((x) => console.log("X is " + x));
//source.subscribe((y) => console.log("Y is " + y));

Rx.Observable
        .fromEvent(document, "keyup")
        .map(event => event.keyCode)
        .do(keyCode => console.log(keyCode))
        .filter(key => key > 47 && key < 91)
        .map(key => String.fromCharCode(key))
        .subscribe(key => console.log(key));
