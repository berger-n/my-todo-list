import { connect } from 'react-redux'
import FicLabel from '../components/FicLabel'
import React from 'react'
import PropTypes from 'prop-types'

/*

            <input type="file" id="theFile" onChange={  this.handleChange  } />
            <label htmlFor="theFile"    title={ this.state.file }>{ this.state.file.replace(/^.*?([^/]+)$/,"$1") }</label>
)
*/

let FicLabel = function(state){
   console.log("FicLabel:",state);
   
return (
      <label htmlFor="theFile" title={ state.choixFic.name }>{ state.choixFic.name.replace(/^.*?([^/]+)$/,"$1") }</label>
)}

/*
FicLabel.propTypes = {
  state: PropTypes.string.isRequired
}
*/

//export default FicLabel

// Alt+T H R X

const mapStateToProps = function(state) {

   console.log("mapstate:"+state.choixFic.present)

return ({
  choixFic: state.choixFic.present
})

}

FicLabel = connect(
  mapStateToProps
)(FicLabel)

export default FicLabel


/*
 
b c
 Y
 g
 
 
 
  a
 /|\ 
b h c
|X X|
e Y f
 \|/
  g
  
  d
 /|\ 
b g c
|/ \| 
e a f 
 \|/
  h
 
*/