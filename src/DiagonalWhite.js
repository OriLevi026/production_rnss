import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'
// import bigImage from '../public/DiagonalWhiteBMPs/001_diagonal_thin_long_up_white'; 


class DiagonalWhite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            images: ["/DiagonalWhiteBMPs/001_diagonal_thin_long_up_white.png",
            "/DiagonalWhiteBMPs/002_diagonal_thin_up_white.png",
            "/DiagonalWhiteBMPs/003_diagonal_thin_short_up_white.png",
            "/DiagonalWhiteBMPs/004_diagonal_thin_long_down_white.png",
            "/DiagonalWhiteBMPs/005_diagonal_thin_down_white.png",
            "/DiagonalWhiteBMPs/006_diagonal_thin_short_down_white.png",
            "/DiagonalWhiteBMPs/007_diagonal_long_up_white.png",
            "/DiagonalWhiteBMPs/008_diagonal_up_white.png",
            "/DiagonalWhiteBMPs/009_diagonal_short_up_white.bmp",
            "/DiagonalWhiteBMPs/010_diagonal_long_down_white.bmp",
            "/DiagonalWhiteBMPs/011_diagonal_down_white.bmp",
            "/DiagonalWhiteBMPs/012_diagonal_short_down_white.bmp",
            "/DiagonalWhiteBMPs/013_diagonal_thick_long_up_white.bmp",
            "/DiagonalWhiteBMPs/014_diagonal_thick_up_white.bmp",
            "/DiagonalWhiteBMPs/015_diagonal_thick_short_up_white.bmp",
            "/DiagonalWhiteBMPs/016_diagonal_thick_long_down_white.bmp",
            "/DiagonalWhiteBMPs/017_diagonal_thick_down_white.bmp",
            "/DiagonalWhiteBMPs/018_diagonal_thick_short_down_white.bmp",
            "/DiagonalWhiteBMPs/019_almost_vertical_thin_long_down_white.bmp",
            "/DiagonalWhiteBMPs/020_almost_vertical_long_down_white.bmp",
            "/DiagonalWhiteBMPs/021_almost_vertical_thick_long_down_white.bmp",
            "/DiagonalWhiteBMPs/022_almost_vertical_thin_short_up_white.bmp",
            "/DiagonalWhiteBMPs/023_almost_vertical_short_up_white.bmp",
            "/DiagonalWhiteBMPs/024_almost_vertical_thick_short_up_white.bmp",
            "/DiagonalWhiteBMPs/025_almost_vertical_thin_short_down_white.bmp",
            "/DiagonalWhiteBMPs/026_almost_vertical_short_down_white.bmp",
            "/DiagonalWhiteBMPs/027_almost_vertical_thick_short_down_white.bmp",
            "/DiagonalWhiteBMPs/028_low_diagonal_long_up_white.bmp",
            "/DiagonalWhiteBMPs/029_high_diagonal_long_up_white.bmp",
            "/DiagonalWhiteBMPs/030_high_diagonal_long_down_white.bmp",
            "/DiagonalWhiteBMPs/031_low_diagonal_long_down_white.bmp",
            "/DiagonalWhiteBMPs/032_2_high_diagonal_thin_up_white.bmp",
            "/DiagonalWhiteBMPs/033_2_low_diagonal_thin_up_white.bmp",
            "/DiagonalWhiteBMPs/034_diagonal_thick_up_white_and_diagonal_up_white.bmp",
            "/DiagonalWhiteBMPs/035_diagonal_thin_up_white_and_diagonal_up_white.bmp",
            "/DiagonalWhiteBMPs/036_diagonal_thin_short_down_white_and_diagonal_up_white.bmp",
            "/DiagonalWhiteBMPs/037_diagonal_short_down_long_up_white.bmp",
            "/DiagonalWhiteBMPs/038_diagonal_long_up_short_down_white.bmp",
            "/DiagonalWhiteBMPs/039_x_white.bmp"
        ],     
            sounds: ["/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav001_diagonal_thin_long_up_white (1).mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav002_diagonal_thin_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav003_diagonal_thin_short_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav004_diagonal_thin_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav005_diagonal_thin_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav006_diagonal_thin_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav007_diagonal_long_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav008_diagonal_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav009_diagonal_short_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav010_diagonal_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav011_diagonal_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav012_diagonal_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav013_diagonal_thick_long_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav014_diagonal_thick_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav015_diagonal_thick_short_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav016_diagonal_thick_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav017_diagonal_thick_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav018_diagonal_thick_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav019_almost_vertical_thin_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav020_almost_vertical_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav021_almost_vertical_thick_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav022_almost_vertical_thin_short_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav023_almost_vertical_short_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav024_almost_vertical_thick_short_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav025_almost_vertical_thin_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav026_almost_vertical_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav027_almost_vertical_thick_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav028_low_diagonal_long_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav029_high_diagonal_long_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav030_high_diagonal_long_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav031_low_diagonal_long_down_whitee.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav032_2_high_diagonal_thin_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav033_2_low_diagonal_thin_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav034_diagonal_thick_up_white_and_diagonal_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav035_diagonal_thin_up_white_and_diagonal_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav036_diagonal_thin_short_down_white_and_diagonal_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav037_diagonal_short_down_long_up_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav038_diagonal_long_up_short_down_white.mp3",
            "/DiagonalWhiteWAVs/5001_Diagonal_lines1_Whitebeep.wav039_x_white.mp3"],       
      
        };
    }

    imageOnClick(index) {//update the imageReplacer
        const newState = {index: index};
        this.setState({index: index});
    }
    
    imageReplacer(index){//sets the image and the audio
        return (
            <div class="eyeMusicViewer">
                <div><audio controls class="current-audio" src={this.state.sounds[index]} /></div>
                <div><img class="big-setup" src={this.state.images[index]}/></div>
            </div>
                
        );
     }
  

    render() { 
        return ( 
            <div>
                <div class="instructions">
                <h3>This section contains 39 images, you can move between the images with tab and shift + tab buttons, press enter to "sound" the selected image. press ctrl to start and stop the audio,<br/> press SHIFT + F1 for faster press SHIFT + F2 for slower.</h3>
                <h4>Always remember the three rules of EyeMusic:</h4>
                <p>1. The picture scanning goes from left to right and every scan starts with a short beep.</p>
                <p>2. The height of the object in the picture is represented by the frequency of the sound.</p>
                <p>3. Different colours are represented by sounds played by different musical instruments</p>
                </div>  

                { this.imageReplacer(this.state.index) }

                <button class="buttons">
                    <NavLink to="">START EXAM</NavLink>
                </button>

                <button class="buttons" >Pause</button>
               
                <div class="select-image" >
                    { //loads the images array
                        this.state.images.map((image, index) => {
                            this.state.index++;
                            return <img onClick={() => this.imageOnClick(index)} id={"i"+this.state.index} class="setup" src={image}   /> 
                        }) 
                    }
                </div>  
            </div>  
         );
    }
}
 
export default DiagonalWhite;