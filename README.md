# Signal Store + Signal Forms 🚦📝

Blog: https://gedoplan.de/javablog/

Kleine Demo-App mit **Angular 22**. Sie zeigt, wie **NgRx Signal Store**, **Signal Forms** und **Resources** zusammenspielen. 🤝

Was passiert hier? 👇

- 🔍 **User-Liste** mit Suche (debounced) und Pagination, Daten von [dummyjson.com](https://dummyjson.com/users)
- ✏️ **User-Details** als Signal Form, das per `submission` speichert
- 📦 **API-Wrapper**: Der generierte Service wird in [`UserService`](src/app/api/user-service.ts) verpackt. Alle GETs kommen dort als `rxResource` raus.

## Los geht's 🚀

```bash
npm install
npm start
```

Danach [http://localhost:4200](http://localhost:4200) öffnen. Fertig! 🎉

## Wo spielt die Musik? 🎵

Das Herzstück ist der State 👉 [`src/app/user/user-state.ts`](src/app/user/user-state.ts)

- Dort liegen Suchbegriff und Pagination als State.
- Die User-Liste ist eine Resource, die bei jeder Änderung am State automatisch neu lädt. ⚡
- Bereitgestellt wird der Store in [`app.ts`](src/app/app.ts), genutzt in der [`UserList`](src/app/user/user-list/user-list.ts).

(by) GEDOPLAN, Dominik Mathmann
