import { connect } from 'react-redux';
import Card from './Card';
import { 
  createActionAddSubCard, 
  createActionRemoveCard,
} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  addSubCard: subCardContent => dispatch(createActionAddSubCard(subCardContent)),
  removeCard: cardId => dispatch(createActionRemoveCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);