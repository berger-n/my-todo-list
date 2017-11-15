import React from 'react'
import PropTypes from 'prop-types'

/*

            <input type="file" id="theFile" onChange={  this.handleChange  } />
            <label htmlFor="theFile"    title={ this.state.file }>{ this.state.file.replace(/^.*?([^/]+)$/,"$1") }</label>
)
*/

const FicSelec = (fic) => (
   <span>
      <input type="file" id="theFile"/>
      <label htmlFor="theFile" title={ fic }>{ fic.replace(/^.*?([^/]+)$/,"$1") }</label>
   </span>
)

FicSelec.propTypes = {
  fic: PropTypes.string.isRequired
}

export default FicSelec 

// Alt+T H R X