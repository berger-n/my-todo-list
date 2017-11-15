import React from 'react'
import PropTypes from 'prop-types'

/*

            <input type="file" id="theFile" onChange={  this.handleChange  } />
            <label htmlFor="theFile"    title={ this.state.file }>{ this.state.file.replace(/^.*?([^/]+)$/,"$1") }</label>
)
*/

const FicLabel = function(state){
   console.log("FicLabel:",state);
   
return (
      <label htmlFor="theFile" title={ state.choixFic.name }>{ state.choixFic.name.replace(/^.*?([^/]+)$/,"$1") }</label>
)}

/*
FicLabel.propTypes = {
  state: PropTypes.string.isRequired
}
*/

export default FicLabel

// Alt+T H R X