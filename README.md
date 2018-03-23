
# Goodbye Redux, MobX etc. Willkommen React Context ❤️

Jeder der mit React arbeitet kommt irgendwann an den Punkt, indem das State Management einfach nicht mehr übersichtlich ist und ähnlich wie eine heiße Kartoffel von Component zu Component geworfen wird. Für dieses Problem gab es ja zum Glück Libaries wie Flux, Redux oder MobX, die einem helfen sollten einen globalen State zu nutzen. Doch leider und das weiß jeder der sich mit Redux etx herumschlagen musste, ist das ganze doch recht Komplex. Besonders die Einrichtung kann einen gerne mal für längere Zeit beschäftigen. Dieses Problem haben auch die Facebook Entwickler von React erkannt und nun mit der Alpha von React 16.3 etwas neues hinzugefügt names ‘Context’ und was soll ich sagen? Es ist fantastisch.

Warum? Es ist einfach einzubinden, schnell zu erlernen und in React direkt enthalten. Einfach wunderbar. In den folgenden Zeilen zeige ich euch ein kleines Beispiel, wie schnell und einfach doch die neue Context Api genutzt werden kann.

Doch 🛑 stop ganz kurz, wie funktioniert denn dieses Context Api? Ich versuche es einmal in einfache Worte zu verpacken:

*Wir erstellen an einer bestimmten Stelle einen Context, für diesen Context gibt es einen Provider (Verteiler) und Consumer (Konsumenten/ Nehmer etc).
Also baue ich in meine App Component den Provider ein können alle weiteren Child Components als Consumer arbeiten und den State abgreifen. Kein Props hin und her geschreibe, keine komplexe Injection für den Entwickler, einfach nur simpel und effektiv.*

Wir erstellen eine kleine React App, bekommen einen Film Titel angezeigt und die dazu verkauften Tickets. Also dann lasst uns starten 💪

Erstellt eine App mit
> # create-react-app react_context_text

Danach wechseln wir in den eben erstellten Ordner und updaten noch die React und React-Dom Version auf die letzte Alpha 16.3. Je nachdem wann ihr diesen Artikel lest, könnt ihr diesen Punkt überspringen.
> # npm install -s react@next react-dom@next
> # yarn install

Das yarn install habe ich noch dazu gesetzt, falls ihr Probleme beim erstellen bekommen solltet. Ein spannender Bug.

Nun können wir richtig starten! 🙂 Als erstes habe ich den Boilercode rausgeschmissen und ihr seht jetzt eine cleane App Component.

![](https://cdn-images-1.medium.com/max/2976/1*LWccXAJjqqI2y3nlLh_49w.png)

Im nächsten Schritt erstellen wir unseren Context.

![](https://cdn-images-1.medium.com/max/2000/1*xtoXRn53zBD1CyCpdom03g.png)

Nun das ging ja jetzt recht schnell. Diesen Context können wir nun für unseren Components nutzen. Doch damit wir Daten von A nach Z bekommen, benötigen wir unseren Provider. In diesem bauen wir auch gleich unseren State ein, den wir Global nutzen möchten.

![](https://cdn-images-1.medium.com/max/2388/1*Co6-3kvIHkK95e054B6iHg.png)

Danach erstellen wir unsere Consumer Component. Auch hier sind nur wenige Zeilen Code nötig.

![](https://cdn-images-1.medium.com/max/2456/1*7NRY7hq1cpqHT7pb7dg0QA.png)

Nun sehen wir auch, wie wir innerhalb eines Consumers die Context Daten aufrufen können. Einfach context.state.value. Ich finde es wunderschön ❤️
Doch nun lasst uns den Provider und den Consumer in der App verbinden.

![](https://cdn-images-1.medium.com/max/2000/1*p3qh2qMy8My8cKocANfZLA.png)

Manchmal habe ich schon Angst, dass es zu einfach geht. Wenn ihr nun richtig getippt habt, sollte die React App folgendes ausspucken:

![](https://cdn-images-1.medium.com/max/2000/1*VMewJh9HcIPWUzaKBQVgZA.png)

Also der erste Teil ist geschafft! Wir haben unsere Daten vom Context durch die Components verteilt. Ein kleiner aber schöner Erfolg und dann noch so einfach. Vergleicht diesen Part einmal mit der Einrichtung von Redux. 🤮

Nun aber das soll es noch nicht gewesen sein. Was wenn wir den State im Provider auch verändern möchten? Nun nichts leichter als das 🙂

Bearbeiten wir noch einmal den *value* des Providers und fügen ein weiteres Feld hinzu, indem wir eine Funktion einsetzen, die den Ticketzähler um 1 hoch zählt.

![](https://cdn-images-1.medium.com/max/2084/1*BreYA1pLYmOek85KtQqJrw.png)

Danach setzen wir im TicketSolder einen Button ein und greifen über den Context auf diese Funktion zu.

![](https://cdn-images-1.medium.com/max/2792/1*IxazzgeVbAzX-sCBOAoZew.png)

![](https://cdn-images-1.medium.com/max/2000/1*pAQzVKRO-TjF4WsXry8W2A.png)

Speichern, den Button klicken und feiern. Es ist so verdammt einfach. Ich liebe es und ihr solltet es auch. Gehen wir mal davon aus, das bis Ende 2018 niemand mehr darauf verzichtet und sich die anderen Libaries so langsam verabschieden können.

Den SourceCode zu dem ganzen findet ihr hier. [https://github.com/mboeddeker/react_context_test](https://github.com/mboeddeker/react_context_test)
