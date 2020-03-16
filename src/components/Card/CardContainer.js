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
  addSubCard: content => dispatch(createActionAddSubCard(content)),
  removeCard: card => dispatch(createActionRemoveCard(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);