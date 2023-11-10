import React from 'react';
import Skip1 from '../playerbuttons/next.png';
import Play from '../playerbuttons/play.png';
import Prev from '../playerbuttons/prev.png';
import Reepeat from '../playerbuttons/repeat.png';
import Shuffle from '../playerbuttons/shuffle.png';

const MyPlayer = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <div>
                   <img className="player-icon" src={Shuffle} alt="shuffle" />
                </div>
                <div>
                   <img className="player-icon" src={Prev} alt="prev" />
                </div>
                <div>
                   <img className="player-icon" src={Play} alt="play" />
                </div>
                <div>
                   <img className="player-icon" src={Skip1} alt="next" />
                </div>
                <div>
                   <img className="player-icon" src={Reepeat} alt="repeat" />
                </div>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlayer;
