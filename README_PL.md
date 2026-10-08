# Meadowbrook Farm — Web / GitHub Pages

## Najprostsze uruchomienie
1. Rozpakuj ZIP.
2. Otwórz index.html w Chrome, Edge lub Firefox. Gra nie pobiera bibliotek, grafik ani dźwięków z internetu; lokalne pliki wystarczą do gry offline.
3. Kliknij Start a new farm. Instrukcja: JAK_GRAC_PL.md.

Zapis korzysta z localStorage. Pod adresem file:// jego dostępność zależy od przeglądarki. Stabilny adres GitHub Pages lub lokalny serwer jest lepszy do stałego zapisu. Usunięcie danych witryny, tryb prywatny lub zmiana adresu może usunąć/odseparować postęp.

Opcjonalny lokalny serwer, jeśli masz Python:
```sh
python -m http.server 8080
```
Otwórz http://localhost:8080. Serwer uruchom w folderze, w którym leży index.html.

## GitHub Pages — krok po kroku
1. Zaloguj się na https://github.com/ i kliknij New repository.
2. Nadaj nazwę, np. meadowbrook-farm. Dla prostego wariantu bezpłatnego hostingu wybierz Public; pamiętaj, że kod będzie publiczny.
3. Kliknij Create repository.
4. Wybierz Add file → Upload files. Wgraj ZAWARTOŚĆ folderu Web: index.html, style.css, game.js, render.js, app.js i icon.svg. index.html ma być w głównym folderze repozytorium, a nie w zagnieżdżonym folderze ZIP. Opcjonalne instrukcje i zrzuty nie są potrzebne do działania.
5. Kliknij Commit changes.
6. Settings → Pages → Build and deployment → Source: Deploy from a branch.
7. Branch: main, folder: / (root) → Save.
8. Poczekaj na wdrożenie. Otwórz adres pokazany w Pages, zwykle https://TWOJ_LOGIN.github.io/meadowbrook-farm/.
9. Nie wgrywaj ZIP zamiast plików strony. GitHub Pages nie rozpakowuje archiwum.

Gra używa względnych ścieżek, więc działa w podfolderze repozytorium. Nie wymaga npm, kompilowania ani backendu. Nie została automatycznie opublikowana na Twoim koncie. Wersja Web nie zawiera AdMob.

## Sterowanie
Mysz/dotyk: wybierz narzędzie i dotknij celu. Walk otwiera budynki i rozmowy. Garden daje większe przyciski grządek. Backpack wybiera gatunek nasion. Klawiatura: WASD lub strzałki, E używa narzędzia przed postacią (na grządce: na polu pod postacią), Escape otwiera/zamyka pauzę. Możesz przewijać stronę, aby dotrzeć do przycisków poniżej mapy.

## Zawartość źródeł
- game.js: reguły i walidacja zapisu.
- render.js: autorska proceduralna grafika Canvas.
- app.js: sterowanie, okna, zapis i dźwięki.
- style.css: układ na komputer i telefon.
- test-rules.cjs: testy modelu uruchamiane poleceniem node test-rules.cjs.
- screenshots/: 8 prawdziwych zrzutów interfejsu WEB, każdy 1080×1920. Nie przedstawiają natywnej wersji Android i nie należy ich przedstawiać jako zrzutów Androida w Google Play.

W ekranach nie ma sztucznych ocen ani reklamowanych nieistniejących funkcji. Android jest oddzielnym projektem.
