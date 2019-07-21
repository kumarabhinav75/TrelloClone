import { connect } from 'react-redux'
import { addList, addCard } from '../redux/actions'
import Board from '../components/Board/Board.component'

const mapStateToProps = state => ({
    cardData: state.cards,
    listNames: state.lists
})

const mapDispatchToProps = dispatch => ({
    addList: listName => dispatch(addList(listName)),
    addCard: payload => dispatch(addCard(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)