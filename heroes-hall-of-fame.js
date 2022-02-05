class Hero {
    powerCount = 10;//zrezygnowałam z własności prywatnych aby uyskać do nich dostęp z zewnątrz klasy

    constructor(name) {
        this.name = name;
    }
    getCurrentPowerCount() {   
        return this.powerCount; 
    }
    train() {
        this.powerCount++;//dodawano jeden ale nie aktualizowano wartości zmiennej powerCount
    }
}

let heroCount = 0;

const heroes = [];

const getHero = (heroName) => { //funkcja była wywoływana przed deklaracją + konsekwentnie do reszty kodu można by zastosować funkcję strzałkową + funkcja miała niespójną z resztą notację nazwy
    heroCount++;
    document.getElementById('heroCount').innerHTML = heroCount;//brakowało wstawienia wartości heroCount do DOMu
    let hero = new Hero(heroName);//funkcja za kazdym razem tworzyła tego samego bohatera
    return hero; //funkcja używa konstruktora ale nic nie zwraca
}

let hero = getHero("hulk");
let geralt = getHero("geralt");
let spiderman = getHero("spider");//zmienna bez powodu znajdowała się w ciele funkcji printHallOfFame + sposób zapisu wskazywał na nazwę zmiennej a nie string
heroes.push(hero);
heroes.push(geralt);
heroes.push(spiderman);
const printHallOfFame = () => {

    const heroesContainer = document.querySelector("div"); //# używamy do id elementu, nie do tagu
    heroes.map((x,i) => {//można skasować nieużywane parametry
        const heroElement = document.createElement("div");
        i = document.createElement("button");//button powinien być do kazdego bohatera

        const forceTrain = (x) => {//nowa funkcja do wywołania metody train() klasy Hero
            let y = new Hero();
            y.train(x);
            heroElement.innerHTML = `<p>${x.name}</p><p>${y.powerCount}</p>`;
        }

        heroElement.innerHTML = `<p>${x.name}</p><p>${x.powerCount}</p>`;//błąd w pobraniu własności obiektu + brak otwarcia drugiego paragrafu
        i.innerHTML = 'Power up hero';
        heroesContainer.append(heroElement);
        heroesContainer.append(i);
        i.addEventListener("click",()=>forceTrain(x));  
    });
};

printHallOfFame();//funkcja była wywoływana przed deklaracją + miała niespójną z resztą notację nazwy