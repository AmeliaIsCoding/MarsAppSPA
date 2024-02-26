import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Select from 'react-select';

import { Camera } from '../../models/Camera';
import { Rover } from "../../models/Rover"; 
import { RoversResponse } from "../../models/RoversResponse";

function Form() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/search/${chosenRover}/${chosenCamera}`; 
    navigate(path);
  }
   const [rovers, setRovers] = React.useState<Rover[]>();
   const [chosenRover, setChosenRover] = React.useState<Rover>();
   const [allowedCameras, setAllowedCameras] = React.useState<Camera[]>([]);
   const [chosenCamera, setChosenCamera] = React.useState<Camera>();
   React.useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get("http://10.211.12.148:8000/rovers");
        const json = (await response).data as RoversResponse;
        setRovers(json.rovers.map((rover) => {return rover.name}));
        const roverCameras = json.rovers.map((rover) => {return {rover: rover.name, cameras: rover.cameras.map((camera) => {return camera.name})}});
        setAllowedCameras(roverCameras.filter((combination) => combination.rover === chosenRover)[0]?.cameras ?? []);
      } catch (error) {
        setRovers([]);
        setAllowedCameras([]);
      }
    };
    loadData();
   }, [chosenRover]);
   React.useEffect(() => {
    console.log("Rovers: ",rovers?.concat());
   }, [rovers]);
   return (
    <div className="Form">
      <div className="Form-row">
        <p className="Form-text">Choose a rover:</p>
        <Select options={rovers?.map((rover) => {return {value: rover, label: rover}})} onChange={(choice) => setChosenRover(choice?.value)}  styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'red',
            width: 275,
            color: 'black',
            }),
          }} />
          </div>
          <div className="Form-row">
        <p className="Form-text">Choose a camera:</p>
        <Select options={(allowedCameras).map((camera) => {return {value: camera, label: camera}})} onChange={(choice) => setChosenCamera(choice?.value)} styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'red',
            width: 275,
            color: 'black',
          }),
          }} />
      </div>
      <button disabled={!(chosenRover&&chosenCamera)} className='Form-search' onClick={routeChange}>Search</button>
      <Link className="Form-homeLink" to="/">Home</Link>
    </div>
  );
}

export default Form;
