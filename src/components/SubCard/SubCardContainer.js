import {connect} from 'react-redux';
import SubCard from './SubCard';
import {createActionRemoveSubCard} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  removeSubCard: item => dispatch(createActionRemoveSubCard(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubCard);