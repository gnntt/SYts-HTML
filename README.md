# Sahaja Yoga Trieste

Sito statico del centro Sahaja Yoga di Trieste — https://sahajayogatrieste.it

HTML, CSS e JavaScript puri: nessuna dipendenza e nessun passaggio di build.
Il sito viene pubblicato su GitHub Pages a ogni push su `main`
(`.github/workflows/static.yml`).

## Struttura

```
index.html          Home
sahaja-yoga.html    Cos'è Sahaja Yoga (Kundalini, canali, chakra, FAQ)
shri-mataji.html    La fondatrice
corsi.html          Corsi a Trieste
contatti.html       Contatti e modulo (apre il client email)
assets/css/style.css
assets/js/main.js   Menu mobile, animazioni, modulo contatti
assets/img/         Immagini e logo
```

## Da aggiornare

Al momento non ci sono corsi attivi: `corsi.html` rimanda all'email
info@sahajayogatrieste.it. Quando ripartiranno i corsi, aggiungere lì giorno,
orario e sede, e aggiornare i testi "Al momento non ci sono corsi attivi" in
`index.html` e `contatti.html`.

Intestazione e piè di pagina sono ripetuti in ogni pagina: se cambi il menu,
aggiornalo in tutti i file `.html`.

## Anteprima locale

```
python3 -m http.server
```
e apri http://localhost:8000
