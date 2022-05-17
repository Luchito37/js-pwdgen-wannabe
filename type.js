const nomeUtente = prompt ("Qual è il tuo nome?") ;

const cognomeUtente = prompt ("Quale è il tuo cognome?") ;

const annoNascitaUtente = prompt ("In che anno sei nato?") ;

const luogoNascitaUtente = prompt ("Dove sei nato?")

const etaUtente = 2022 - annoNascitaUtente;

// Recuperiamo l'elemento html con id "span-nome-utente"

const spanNomeUtente = document.getElementById("span-nome-utente");

// assegniamo un valore alla proprietà innerHTML

spanNomeUtente.innerHTML = `<strong class="text-danger">
                            ${nomeUtente} ${cognomeUtente}
                            </strongs><br>

                            <small class="text-white">You are <span class="text-danger">${etaUtente}</span> years old.</small>
                            <br>
                            <small class="text-white">And born in <span class="text-danger">${luogoNascitaUtente}</span></small>`;