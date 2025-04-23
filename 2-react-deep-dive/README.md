# Aufgaben

Wie auch schon vorhin sind alle Abhängigkeiten vorinstalliert. Ihr müsst nur mit `npm i(nstall)` alle Dependencies installieren

## Immutability

Durch einen Fehler im `onChange` Handler der Checkboxen wird die UI beim anclicken nicht aktualisiert. Kannst du den Fehler beheben?

Beim anclicken der Checkboxen soll der Zustand zwischen `false` und `true` wechseln. das Update sollte in den Checkboxen und im Debug-State darunter sichtbar sein.

## State Uplifting

Gegeben ist eine kleine Ampel-Anwendung. Durch das anklicken der einzelnen Leuchten kann die jeweilige Leuchte an- und ausgemacht werden.
Der "State" der Ampel wird in den einzelnen Leuchten gehalten.

Im Rahmen der Aufgabe soll dieser State "nach oben" in die `App.tsx` gezogen werden und die Anwendung so angepasst werden, dass immer nur die angeklickte Leuchte leuchtet. Bei Programmstart soll die Ampel auf Grün starten.
