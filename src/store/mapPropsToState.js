import { setSelectedProjectAction, getSelectedProjectAction } from '../actions/action';

const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setSelectedProjectAction: (payload) => dispatch(setSelectedProjectAction(payload)),
    getSelectedProjectAction: () => dispatch(getSelectedProjectAction)
});

export { mapStateToProps , mapDispatchToProps }; 