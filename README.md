esercizio arrey carouosel
===
creare un array contenente una lista di cinque immagini e creare un carosello delle immagini.
## Svolgimento

1. in html creo un conteiner dove al centro andranno le immagini
2. personalizzo la web page
3. in js creo l'arrey con tutte le immagini
4. faccio un loop dove inserirò ad ogni ciclo un immagine
5. inserisco nell'htm tramite tameplate l'elemento che contiene le singole immagini e gli aggiungo la classe display none
6. salvo in una  variabile una collezione di tutte le immagini grazie a get element by class name
7. salvo in una variabile i bottoni che ho in html 
8. creo in una variabile un counter che parte da 0. Mi permetterà di far funzionare il carousel
9. la classe display none precedentemente messa a tutte le img adesso la tolgo alla prima
10. con addeventlistener metto in moto le funzionalità dei bottoni un e down
11. ad ogni click i bottoni avranno specifiche condizioni da eseguire
  - il counter aumenta o diminuisce di uno
  - quando aumeta o decrementa ( a seconda del bottone up o down) con add rimetto la classe display none
  - al counter precedente l'aumento o il decremento gli tolgo la classse none
  - rendo anche i bottoni visibili o invisibili a seconda delle mie necessità
  12. per mettere una fila di immagini aggiungo al loop un altro tame plate dove inseriro le immagini in flex collum con dimensioni più piccole