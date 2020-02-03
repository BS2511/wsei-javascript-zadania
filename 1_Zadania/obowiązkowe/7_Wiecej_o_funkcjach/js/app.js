/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Utworzenie funkcji jeden()
function jeden() {

    //Inicjacja zmiennej zmienna1 i przypisanie jej wartości 1 (wczyta się po funkcji jeden)
    var zmienna1 = 1;

    //Utworzenie funkcji dwa()
    function dwa() {

        //Wypisanie w konsoli wartości zmienna1
        console.log(zmienna1);

        //Inicjacja zmiennej zmienna2 i przypisanie jej wartości 3
        var zmienna2 = 3;
    }

    //Wywołanie funkcji dwa
    dwa();

    //wyrzuca zmienna2 is not defined ponieważ zmienna2 jest zainacjowana w fucnkji dwa(), a nie jest zmienna globalną - funkcja jeden() nie wiem czym jest zmienna2
    console.log(zmienna2)
}

//Wywołanie funkcji jeden()
jeden()