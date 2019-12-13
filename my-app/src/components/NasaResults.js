import React from 'react';
import {connect} from 'react-redux'
import NasaCard from './NasaCard'


const NasaResults = props => {
    return(
        <div>
              {props.data.map(item =>{
               return <NasaCard 
               key={item.id} 
               image = {item.image}
               name={item.name} 
               species={item.species} 
              
               status={item.status} 
               
                  />
            })}
        </div>
    )
}


const mapStateToProps = state => {
    return {
      data: state.data,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(NasaResults);
  

