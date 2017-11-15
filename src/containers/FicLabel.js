import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'

let FicLabel = ({ choixFic }) => 
(
   <label htmlFor="theFile" title={ choixFic.name }>{ choixFic.name.replace(/^.*?([^/]+)$/,"$1") }</label>
)

const mapStateToProps = (state) => 
(
   { 
      choixFic: state.choixFic.present
   }
)

FicLabel = connect(
  mapStateToProps
)(FicLabel)

export default FicLabel


/*

m  n

a  b  c  d  k

e  f  g  h  l
 
i  j  



c k
 d 
 h 

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