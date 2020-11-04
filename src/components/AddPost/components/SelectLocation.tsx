import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import {MdLocationOn} from 'react-icons/md'


const useStyles = makeStyles({
    
  });

const SelectLocation = (props:any) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState<{lat:null|number;lng:null|number}>({
    lat: null,
    lng: null
  });

  const handleSelect = async (value:any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div className='select-location'>
       <div className="select-location__head">
       <div className={`inputContainer ${props.theme}-inputContainer`}>
                        <SearchIcon className="searchIcon" />
                 <input className={`select-location__input ${props.theme}-select-location__input`} placeholder="Where are you ?" />
           </div>
       </div>

       <div className='suggested__locations'>
            <div className={`location ${props.theme}-location`}>
                <div className='location-icon-wrapper'>
                  <MdLocationOn className='location-icon' />
                </div>

                <div className='location-text'>
                    <h5>Location Name</h5>
                    <p>dklasdahsdsadas</p>
                </div>
            </div>
            <div className={`location ${props.theme}-location`}>
                <div className='location-icon-wrapper'>
                  <MdLocationOn className='location-icon' />
                </div>

                <div className='location-text'>
                    <h5>Location Name</h5>
                    <p>dklasdahsdsadas</p>
                </div>
            </div>
            <div className={`location ${props.theme}-location`}>
                <div className='location-icon-wrapper'>
                  <MdLocationOn className='location-icon' />
                </div>

                <div className='location-text'>
                    <h5>Location Name</h5>
                    <p>dklasdahsdsadas</p>
                </div>
            </div>
       </div>
          
    </div>
  );
}

export default SelectLocation
