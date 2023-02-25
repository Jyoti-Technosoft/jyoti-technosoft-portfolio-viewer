import { setSelectedProjectAction, getSelectedProjectAction, setProjectListAction, switchTheme } from '../actions/action';

const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setSelectedProjectAction: (payload) => dispatch(setSelectedProjectAction(payload)),
    getSelectedProjectAction: () => dispatch(getSelectedProjectAction),
    setProjectListAction: (payload) => dispatch(setProjectListAction(payload)),
    switchTheme: (payload) => dispatch(switchTheme(payload))
});

export { mapStateToProps , mapDispatchToProps }; 