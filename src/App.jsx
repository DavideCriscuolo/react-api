/*MILESTONE 1 Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.

MILESTONE 2
Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:
nome
anno nascita
nazionalità
biografia
immagine
riconoscimenti
immagine

MILESTONE 3
Mostriamo in pagina una card per ciascun attore, con grafica a piacimento!

BONUS 1 :rilassato:
Stampare sia una lista delle attrici che degli attori, separatamente.
BONUS 2 :occhiali_da_sole:
Stampare un’unica lista che contiene attori e attrici insieme!
BONUS 3 :testa_che_esplode:
Inserire un filtro di ricerca che permetta di cercare gli attori o le attrici per nome.
*/

import { use, useEffect, useState } from "react";

function App() {
  const [actors, setActors] = useState([]);

  const url = "https://www.freetestapi.com/api/v1/actresses";

  function loadingActors() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActors(data);
      });
  }
  useEffect(loadingActors, []);
  return (
    <>
      <div>
        <main>
          <div className="container">
            <div className="row">
              {actors.map((actor) => {
                <div className="col">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={actor.image}
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{actor.name}</h4>
                      <div className="card-text">
                        <span>{actor.age} </span>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
