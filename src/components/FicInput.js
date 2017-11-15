import React from 'react'
import PropTypes from 'prop-types'

/*

            <input type="file" id="theFile" onChange={  this.handleChange  } />
            <label htmlFor="theFile"    title={ this.state.file }>{ this.state.file.replace(/^.*?([^/]+)$/,"$1") }</label>
)
*/

const FicInput = () => (
   <input type="file" id="theFile"/>
)

/*
FicInput.propTypes = {
  fic: PropTypes.string.isRequired
}
*/

export default FicInput

// Alt+T H R X