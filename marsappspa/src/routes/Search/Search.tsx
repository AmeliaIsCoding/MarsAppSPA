import { Link, useParams } from 'react-router-dom';
import './Search.css';
import React from 'react';
import axios from 'axios';
import { PhotosResponse } from '../../models/PhotosResponse';

function Search() {
  const {rover, camera} = useParams();
  const [photos, setPhotos] = React.useState<string[]>();
  React.useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get(`http://10.211.12.148:8000/rovers/${rover}/photos/${camera}`);
        const json = (await response).data as PhotosResponse;
        setPhotos(json.photos.map((photo) => {return photo.img_src}).slice(0,5));
      } catch (error) {
        setPhotos([]);
      }
    };
    loadData();
   }, [rover, camera]);
  return (
    <div className="Search">
      <header className="Search-header">
        <p>Images from {rover} {camera}</p>
        {photos?.map((src) => {
            return <img src={src} alt="" className="Search-image"/>
        })}
        {photos?.length === 0 && <p className="Search-body">No images found</p>}
        {photos === undefined && <p className="Search-body">Loading...</p>}
        <div className="Search-row">
        <Link className="Search-link" to="/form">Back to search</Link>
        <Link className="Search-link" to="/">Home</Link>
        </div>
      </header>
    </div>
  );
}

export default Search;
