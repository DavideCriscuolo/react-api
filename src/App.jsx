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
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [allActors, setAllActros] = useState([]);
  const [filtered, setFiltred] = useState(allActors);
  const [search, setSearch] = useState({
    name: "",
  });
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

  function allActorss() {
    setAllActros([...actors, ...actresses]);
  }

  useEffect(allActorss, [actresses, actors]);

  function filterActors() {
    if (search.name) {
      const filter = allActors.filter((actor) => {
        return actor.name.toLowerCase().includes(search.name.toLowerCase());
      });
      setFiltred(filter);
    } else {
      setFiltred(allActors);
      console.log(allActors);
    }
  }

  useEffect(filterActors, [search.name]);

  return (
    <>
      <div>
        <main>
          <div className="container">
            <div className="row  row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4  ">
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
                            <span> Nata nel {actresse.birth_year} </span>{" "}
                          </div>
                          <div className="py-2">
                            <h5>Conosciuta per</h5>
                            <span>
                              {actresse.most_famous_movies.join(" , ")}{" "}
                            </span>{" "}
                          </div>
                          <div className="py-2">
                            <h5>Nazionalità</h5>
                            <div>
                              <span>{actresse.nationality} </span>{" "}
                            </div>
                          </div>
                          <div>
                            <h5 className="py-2">Biografia</h5>
                            <div>
                              <span>{actresse.biography} </span>{" "}
                            </div>
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
                        className="card-img-top  object-fit-cover "
                        src={actor.image}
                        alt="Title"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{actor.name}</h4>
                        <div className="card-text">
                          <div>
                            <span>Nato nel {actor.birth_year} </span>{" "}
                          </div>
                          <div className="py-2">
                            <h5>Conosciuto per</h5>
                            <span>{actor.known_for.join(" , ")} </span>{" "}
                          </div>
                          <div className="py-2">
                            <h5>Nazionalità</h5>
                            <div>
                              <span>{actor.nationality} </span>{" "}
                            </div>
                          </div>
                          <div>
                            <h5 className="py-2">Biografia</h5>
                            <div>
                              <span>{actor.biography} </span>{" "}
                            </div>
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
                <ul className="list-group list-group">
                  {actresses.map((actresse) => {
                    return (
                      <li key={actresse.id} className="list-group-item ">
                        {actresse.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col">
                <h2>Attori</h2>
                <ul className="list-group list-group">
                  {actors.map((actor) => {
                    return (
                      <li key={actor.id} className="list-group-item ">
                        {actor.name}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="col">
                <h2>Cerca Attore o Attrice</h2>
                <input
                  type="text"
                  value={search.name}
                  onChange={(e) => setSearch({ name: e.target.value })}
                  className="form-control my-3"
                />
                <ul className="list-group list-group">
                  {filtered.map((actor, index) => {
                    return (
                      <li key={index} className="list-group-item ">
                        {actor.name}
                      </li>
                    );
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
