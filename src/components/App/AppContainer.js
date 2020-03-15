import App from './App';
import { connect } from 'react-redux';
import { createActionAddCard } from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  cards: state.cards,
  titles: state.titles,
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (content, category) => dispatch(createActionAddCard({
    id: props.id,
    category,
    content,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);