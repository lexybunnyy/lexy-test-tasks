
# JavaScript egységtesztelés

## Miért van szükség tesztekre?

- Gyorsabb fejlesztés
Sokszor nem kell mindent végig kattingatni újra meg újra, gyorsabban tudod ellenőrízni hogy a kód azt csinálja amit elvárunk tőle 

- Dokumentálja a kódod
Megnézed a teszteket sokkal egyértelműbb mit is csinál pontosan az a kód.

- Kisebb hibázási lehetőség
Jobban végig gondolod a hiba lehetőségeket, persze ez sem garancia arra, hogy mindenre működni fog, de több esetet tudsz lefedni.  

- Gyorsabban kiderül ha hibázunk
Fejlesztés esetén gyorsabban kiderül a hibázás, kiderül ha valaki elrontja a funkcionalitást.
Amikor fejlesztünk egy kódot, előfordul hogy hibázunk, és bele nyúlunk az eredeti funkcionalításba. 
Ha vannak tesztek, ez hamar kiderül, és látja a feljesztő is. 

- Könnyebb refaktor
Ha a kód le van fedve teszt esetekkel, könnyebb úgy szépítgetni olvashatóbbá tenni, hogy biztosak legyünk benne, nem rontjuk el a működését.

## Hogyan írjunk teszteket

### Jest Telepítése

https://jestjs.io/
https://jestjs.io/docs/getting-started

```bash
npm install --save-dev jest
```

### Jest futtatása

#### 
```bash
npm run test
```

## Mire érdemes figyelni? 

- próbáljunk meg minnél több esetet lefedni
- szélsőséges eseteket teszteljünk (pl negatív számok, nagyon kicsi számok, 0, nagyon nagy számok)
- Teszt esetek ne függjenek egymástól! 
    - minden teszt legyen egymástól független, törekedjünk, hogy bármilyen sorrendben is futnak le, akkor is ugyanaz az eredmény legyen. 
- Egyszerű teszt esetek
   - lehetőleg egy teszt egy dolgot ellenőrizzen csak!
   - Szoktuk azt is mondani hogy törekedjünk hogy csak egy assert legyen benne, de persze nem mindig lesz így, de törekedjünk rá!


## Tesztvezérelt fejlesztés

Először írsz egy tesztet, utána írod meg hozzá a kódot ami átmegy a teszten.
Próbálod minnél minimálisabban megoldani az adott teszt esetet, majd létre hozol egy olyan teszt esetet ami még elromlik. 

Példa: Ha absadd(0, 0) egy adott esetben az érték 0 először csak "return 0"
Hozz létre egy másik esetet is abs(5, 6) ahhoz hogy mindkettőn átmenjen, már kell maga az össze adás. 
Ezután hozz létre olyan esetet ami szintén nem működik, negatív számokkal (-5, -6), és erre is megírhatod a kódot.

Így végeredményben minden esetet le fogsz tudni fedni. 

1. Teszt hozzáadása
2. Minden korábbi teszt futtatása, hogy kiderüljön az új teszt megbukik e
3. Kód írás
4. Minden teszt újbóli futtatása
5. Kódszépítés
+. Lépések ismétlése


https://hu.wikipedia.org/wiki/Tesztvez%C3%A9relt_fejleszt%C3%A9s 


## Egyszerű példa TDD szerint

### Jest Példák