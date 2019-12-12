import React from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import NasaCard from './NasaCard';

import { getData } from '../action';

const Nasa = (props) => {
    return(
        <div>
            <h2>Not social life</h2>
            <NasaCard />
                 {!props.data && !props.isFetching && <p> Fetch Nasa Data 😂</p>}
                 {props.isFetching && (
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                 )}
             {props.joke && <p>{props.data.data}</p>}
     
            <button onClick={props.getData}>API ATTACK</button> 
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
    { getData }
  )(Nasa);
  



