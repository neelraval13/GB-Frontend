// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';


// const useStyles = makeStyles({
    
//   });

// const SelectLocation = (props:any) => {
//   const [address, setAddress] = React.useState("");
//   const [coordinates, setCoordinates] = React.useState<{lat:null|number;lng:null|number}>({
//     lat: null,
//     lng: null
//   });

//   const handleSelect = async (value:any) => {
//     const results = await geocodeByAddress(value);
//     const latLng = await getLatLng(results[0]);
//     setAddress(value);
//     setCoordinates(latLng);
//   };

//   return (
//     <div className='select-location'>
//        <div className="select-location__head">
//        <div className={`inputContainer ${props.theme}-inputContainer`}>
//                         <SearchIcon className="searchIcon" />
//                  <input className={`select-location__input ${props.theme}-select-location__input`} placeholder="Where are you ?" />
//            </div>
//        </div>

//        <div className='suggested__locations'>
//             <div className={`location ${props.theme}-location`}>
//                 <div className='location-icon-wrapper'>
//                   <MdLocationOn className='location-icon' />
//                 </div>

//                 <div className='location-text'>
//                     <h5>Location Name</h5>
//                     <p>dklasdahsdsadas</p>
//                 </div>
//             </div>
//             <div className={`location ${props.theme}-location`}>
//                 <div className='location-icon-wrapper'>
//                   <MdLocationOn className='location-icon' />
//                 </div>

//                 <div className='location-text'>
//                     <h5>Location Name</h5>
//                     <p>dklasdahsdsadas</p>
//                 </div>
//             </div>
//             <div className={`location ${props.theme}-location`}>
//                 <div className='location-icon-wrapper'>
//                   <MdLocationOn className='location-icon' />
//                 </div>

//                 <div className='location-text'>
//                     <h5>Location Name</h5>
//                     <p>dklasdahsdsadas</p>
//                 </div>
//             </div>
//        </div>
          
//     </div>
//   );
// }

// export default SelectLocation
import React,{useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import {MdLocationOn} from 'react-icons/md'


const SelectLocation = (props) => {
 
  const [state,setState] = useState({
    address:''
  })

  const handleChange = address => {
    setState({ address:address });
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }

  console.log(state.address)
    return (
      <div className='select-location'>
      <PlacesAutocomplete
        value={state.address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="select-location__head">
            <div className={`inputContainer ${props.theme}-inputContainer`}>
                              <SearchIcon className="searchIcon" />
                      <input 
                      {...getInputProps({
                        placeholder: 'Where are you ?',
                        className:`select-location__input ${props.theme}-select-location__input`
                      })}
                      />
                </div>
            </div>
          
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}

              <div className='suggested__locations'>
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      
                    })}
                  >
                    <div className={`location ${props.theme}-location`}>
                        <div className='location-icon-wrapper'>
                          <MdLocationOn className='location-icon' />
                        </div>

                      <div className='location-text'>
                     <h5>{suggestion.description.split(',')[0]}</h5>
                     <p>{suggestion.description}</p>
                      </div>
                     </div>
                    
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
    );
  
}

export default SelectLocation