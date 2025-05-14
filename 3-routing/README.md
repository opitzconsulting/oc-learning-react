# Aufgabe

## SPA Routing

Gegeben ist eine Anwendung mit vordefinierten "Routing"-Komponenten.

Diese müssen durch das definieren eines deklarativen Routers angebunden werden. Aktuell wird die Index-Seite angezeigt.

Definiere einen Router sodass

- `/` auf die Home-Seite zeigt
- `/users/id` (bspw. `/users/af300be7-68da-43c2-a293-b54f0a0c31ab`) auf die Detail-Seite zeigt
- alles andere auf die NotFound-Seite zeigt

Die Seiten sollen untereinander über die von react-router bereitgestellte Link-Komponente verbunden werden.
Die `/users/id` Seite soll das Argument aus dem Pfad extrahieren.

> **TIP**: Die Items auf der Home-Seite beinhalten eine `id`. Diese kann über `e.id` im map-Call aufgerufen werden.

Bonusaufgaben: 

- Versuch zusätzlich eine "Pfadloses" Layout für alle Komponenten zu verwenden
- Versuch zusätzlich ein Layout für alle `/users/...` Routen zu definieren
- Versuch eine extra 404-Route für alle User zu definieren
