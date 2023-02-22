import { setSelectedProjectAction, getSelectedProjectAction, setProjectListAction } from '../actions/action';

const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setSelectedProjectAction: (payload) => dispatch(setSelectedProjectAction(payload)),
    getSelectedProjectAction: () => dispatch(getSelectedProjectAction),
    setProjectListAction: (payload) => dispatch(setProjectListAction(payload))
});

export { mapStateToProps , mapDispatchToProps }; 