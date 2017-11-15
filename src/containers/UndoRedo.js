import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) =>
(
   <span> 
      <button title="undo"  onClick={ onUndo } disabled={ !canUndo }>{ 'un\ndo' }</button>
      <button title="redo"  onClick={ onRedo } disabled={ !canRedo }>{ 're\ndo' }</button>
   </span>
)

const mapStateToProps = (state) => ({
  canUndo: state.choixFic.past.length > 0, // ou what ?!? ^^
  canRedo: state.choixFic.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
