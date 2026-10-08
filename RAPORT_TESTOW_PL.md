# Raport sprawdzeń — Meadowbrook Farm

## Web — wykonane
- 8 zestawów testów reguł w Node: wzrost i zbiór; brak wzrostu bez wody; deszcz; energia; zasoby; rozmowy/prezenty; ulepszenia; wędkarstwo; finał pięciu rozdziałów; brak podwójnych nagród; drogi; poprawny i uszkodzony zapis.
- Test rzeczywistej przeglądarki Chromium przez Playwright: Start, mapa i chodzenie, Hoe/Seeds/Water, dwie noce, Garden, Harvest, wejście do sklepu przez dotknięcie środka budynku, sprzedaż, przeładowanie i Continue, anulowanie resetu i potwierdzony reset.
- Układ 1360 px oraz telefon 390 px, bez poziomego przepełnienia. Wizualnie sprawdzono mapę i okno dużych przycisków Garden.
- Uruchomienie pod ścieżką /farm/ i względne zasoby; brak błędów strony oraz odpowiedzi 4xx/5xx podczas testu.
- 8 zrzutów rzeczywistego interfejsu WEB ma 1080×1920 i każdy mniej niż 8 MB. Nie są zrzutami natywnego Androida.
- Grę uruchomiono także z lokalnego index.html podczas robienia zrzutów.

## Android — wykonane
- Wszystkie 6 plików źródłowych Kotlin skompilowano bezpośrednio kompilatorem Kotlin 2.3.10 dla JVM 17, z prawdziwym android.jar API 36 oraz rzeczywistymi bibliotekami API Google Mobile Ads 25.5.0 i UMP 4.0.0. BuildConfig użyty w tym sprawdzeniu był testowym odpowiednikiem klasy generowanej przez Gradle. Kompilacja zakończyła się kodem 0, bez błędów i ostrzeżeń.
- Uruchomiono skompilowany Kotlinowy test modelu: uprawa → nagroda → sprzedaż → kolejne zadania → finał, limit rozmów/zbiorów, energia oraz drogi do wnętrza klikniętego budynku.
- Sprawdzono składnię XML, manifest, zasoby, identyfikatory testowe i prawdziwy Gradle wrapper JAR.
- Przejrzano obsługę cyklu życia, opcjonalnych reklam, nagradzania wyłącznie po callbacku, UMP i resetu zapisu.

## Android — ograniczenia
- Polecenie ./gradlew :app:assembleDebug zatrzymało się na pobieraniu Gradle: java.net.UnknownHostException: services.gradle.org.
- Środowisko nie miało kompletnego Android SDK, JDK z javac ani emulatora. android.jar pobrano do oddzielnej kontroli kompilacji Kotlin; nie jest to pełny toolchain budowania APK.
- NIE wykonano pełnego Gradle Sync, manifest merge, aapt2/D8, pakowania APK, testu natywnego UI na urządzeniu, wyświetlenia reklam, formularzy zgody ani podpisanego wydania.
- Bezpośrednia kompilacja Kotlin nie jest pełnym assembleDebug i nie dowodzi działania reklam na telefonie.
- APK/AAB nie powstał. Przed publikacją wymagany jest pełny build, test emulatora/telefonu i rzeczywista konfiguracja sklepu, odbiorców oraz polityki.

## Pliki testowe
Web: test-rules.cjs. Android: tests/RulesSmoke.kt. Nie dołączono środowisk wykonawczych, pobranych SDK, cache ani bibliotek testowego kompilatora do paczek źródłowych.

## Zakres
Dwie odrębne implementacje tej samej niewielkiej gry. Zapis Android i Web jest oddzielny. Kod Web nie jest osadzony w Androidzie. Projekt nie odtwarza całej zawartości ani rozmiaru Stardew Valley.
