import React from 'react';
import Slider from 'rc-slider';
import {Container, Current, Volume, Progress, Controls,Time, ProgressSlider} from './styles';


import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';


const Player = () => (
  <Container>
    <Current>
      <img src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg" 
      alt=" Cover" 
      />
      <div>
        <span>Times like these</span>
        <small>Green Day</small>      
      </div>
    </Current>

    <Progress>
      <Controls>
        <buttons>
          <img src={ShuffleIcon} alt="Shuffle" />
        </buttons>
        <buttons>
          <img src={BackwardIcon} alt="Backward" />
        </buttons>
        <buttons>
          <img src={PlayIcon} alt="Play" />
        </buttons>
        <buttons>
          <img src={ForwardIcon} alt="Forward" />
        </buttons>
        <buttons>
          <img src={RepeatIcon} alt="Repeat" />
        </buttons>
      </Controls>

      <Time>
        <span>1:39</span>
        
        <ProgressSlider>
          <Slider
            railStyle={{bakground:'#404040',borderRadius:10}}
            trackStyle={{background:'#1ED760'}}
            handleStyle={{ border:0}}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>



    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{background:'#404040', borderRadius:10}}
        trackStyle={{background:'#fff'}}
        handleStyle={{display:'none'}}
        //value={100}
      />
    </Volume>
  </Container>
  
);

export default Player;