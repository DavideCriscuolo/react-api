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

import { useEffect, useState } from "react";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const urlActresse = "https://lanciweb.github.io/demo/api/actresses/";
  const urlActor = "https://lanciweb.github.io/demo/api/actors/";
  function loadingActresses() {
    fetch(urlActresse)
      .then((res) => res.json())
      .then((dataActress) => {
        console.log(dataActress);
        setActresses(dataActress);
      });
  }
  useEffect(loadingActresses, []);

  function loadingActor() {
    fetch(urlActor)
      .then((res) => res.json())
      .then((dataActors) => {
        console.log(dataActors);
        setActors(dataActors);
      });
  }
  useEffect(loadingActor, []);
  return (
    <>
      <div>
        <main>
          <div className="container">
            <div className="row">
              {actresses.map((actresse) => {
                return (
                  <div key={actresse.id} className="col">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={actresse.image}
                        alt="Title"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{actresse.name}</h4>
                        <div className="card-text">
                          <div>
                            <span>{actresse.birth_year} </span>{" "}
                          </div>
                          <div>
                            <span>{actresse.most_famous_movies} </span>{" "}
                          </div>
                          <div>
                            <span>{actresse.nationality} </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {actors.map((actor) => {
                return (
                  <div key={actor.id} className="col">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={actor.image}
                        alt="Title"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{actor.name}</h4>
                        <div className="card-text">
                          <div>
                            <span>{actor.birth_year} </span>{" "}
                          </div>
                          <div>
                            <span>{actor.known_for} </span>{" "}
                          </div>
                          <div>
                            <span>{actor.nationality} </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Attrici</h2>
                <ul class="list-group list-group">
                  {actresses.map((actresse) => {
                    return <li class="list-group-item ">{actresse.name}</li>;
                  })}
                </ul>
              </div>
              <div className="col">
                <h2>Attori</h2>
                <ul class="list-group list-group">
                  {actors.map((actor) => {
                    return <li class="list-group-item ">{actor.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
