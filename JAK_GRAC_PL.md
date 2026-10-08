# Meadowbrook Farm — instrukcja gry

Autorska, niewielka gra farmerska inspirowana spokojnym rozwijaniem farmy. Nie jest kopią Stardew Valley i nie korzysta z jego nazw postaci, map, muzyki ani grafiki.

## Co jest w grze
- 24 grządki; marchew, pomidor i dynia z różnym czasem wzrostu i ceną.
- Chodzenie po mapie z wyszukiwaniem drogi; animowane rośliny, woda, deszcz i kury.
- 3 mieszkańców, rozmowy, prezenty i punkty przyjaźni.
- Wędkarstwo z zatrzymywaniem znacznika w zielonym polu.
- Drewno i kamień, sklep, sprzedaż zbiorów, kurnik oraz ulepszenie studni.
- Dni, cztery pory roku, energia i deszcz co czwarty dzień.
- Pięć etapów dziennika, odbudowa świetlicy i finał Harvest Festival. Po finale można grać dalej.
- Zapis lokalny, Continue, pauza, dźwięk włącz/wyłącz oraz potwierdzenie resetu.

Nie ma ograniczenia czasu dnia. Rośliny nie usychają. Wszystkie gatunki rosną w każdej porze roku; sezony zmieniają wygląd mapy co 14 dni. Nie ma walki, multiplayera, wnętrz budynków, romansu ani podkładu muzycznego. Dźwięki czynności są generowane programowo.

## Pierwsze 5 marchewek — krok po kroku
1. Naciśnij Start a new farm i zamknij instrukcję.
2. Wybierz Hoe i dotknij pięciu grządek.
3. Wybierz Seeds i dotknij tych samych grządek.
4. Wybierz Water i podlej wszystkie posadzone marchewki.
5. Wybierz Sleep i potwierdź.
6. Ponownie podlej rośliny i prześpij następną noc.
7. Wybierz Harvest i zbierz marchewki.
8. Naciśnij Claim reward przy pierwszym zadaniu.
9. Wybierz Walk, następnie MARKET i Sell all… — sprzedasz zbiory.

Na małym ekranie użyj Garden. Każdy duży przycisk wykonuje następną potrzebną czynność: kopanie, sianie, podlewanie lub zbieranie. Gatunek nasion zmieniasz w Backpack. Tam też zobaczysz zawartość plecaka.

## Pozostałe zajęcia
- Walk: dotknij miejsca na mapie. Dotknięcie budynku prowadzi do jego wejścia i otwiera okno.
- Gather: dotknij drzewa lub kamienia. Każde oznaczone miejsce daje 3 sztuki surowca raz dziennie, za 5 energii.
- FISHING DOCK: przy Walk dotknij pomostu. Cast kosztuje 6 energii. Naciśnij Reel in!, gdy znacznik jest w zielonym obszarze.
- Mieszkańcy: Walk → dotknij postaci. Pierwsza rozmowa danego dnia daje punkt przyjaźni. Jeden warzywny prezent dziennie daje kolejne 2 punkty.
- Kurnik: 250 złota + 10 drewna; daje 2 jajka po każdej nocy. Studnia: 300 złota + 10 drewna; po śnie zwiększa energię do 140.
- Finał: wykonaj kolejno zadania z Journal. Na końcu wpłać 1500 złota, 30 drewna i 20 kamienia. Nie ma terminu.
- Gdy brakuje energii, śpij. Nigdy nie trzeba oglądać reklamy ani płacić za kontynuowanie.

## Punkty rozbudowy
Android: Farm.kt → Rules oraz wartości początkowe Farm. Web: game.js → CROPS, QUESTS, fresh(). Zmieniaj każdą implementację osobno. Zapis Web i Android nie jest przenoszony między platformami.
