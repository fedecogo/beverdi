import React, { useEffect } from 'react';

const MyMain = () => {
  const albumCard = function (songInfo) {
    console.log('ciao')
    return `
      <div class="col text-center" id=${songInfo.id}>
          <img class="img-fluid" src=${
            songInfo.album.cover_medium
          } alt="track" />
        <p>
            Traccia: "${
              songInfo.title.length < 16
                ? `${songInfo.title}`
                : `${songInfo.title.substring(0, 16)}...`
            }"<br>
            Artista: ${songInfo.artist.name}
        </p>
      </div>`;
  };

  const handleSection = async (artistName, querySelector) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
          artistName,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      );
      if (response.ok) {
        let { data } = await response.json();
        let musicSection = document.querySelector(querySelector);
        for (let i = 0; i < 4; i++) {
          musicSection.innerHTML += albumCard(data[i]);
        }
      } else {
        throw new Error('Errore nel recupero delle canzoni');
      }
    } catch (err) {
      console.log('errore', err);
    }
  };

  useEffect(() => {
    handleSection('The doors', '#rockSection');
    handleSection('Pink Floyd', '#PinkSection');
     handleSection('Ray Charles', '#hipHopSection');
  }, []);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: 'none' }}>
            <h2>Risultati della ricerca</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>The Doors</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pink Floyd</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="PinkSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>Ray</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMain;
