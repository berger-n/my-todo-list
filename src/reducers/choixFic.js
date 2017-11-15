
import undoable, { distinctState } from 'redux-undo'

const initialState = new File([""],['nouveau fichier']) ;

const choixFic = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FICHIER':
      return action.nom
    default:
      return state
  }
}

const undoableChoixFic = undoable(choixFic, { filter:distinctState() } )

export default undoableChoixFic
