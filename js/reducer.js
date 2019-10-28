let state; // instead of defining the state object here we are going to pass it in as an argu in the function

function changeState(state = { count: 0 }, action) {
 
  switch (action.type) {

    case 'INCREASE_COUNT':
      return { count: state.count + 1 }

    default:
      return state;
  }
}

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}


//Now, if we want our page to display 0 when it first loads, we can just add dispatch({ type: '@@INIT' })
//at the end of the file 
// it's doing this because the action @@init is not defined so it's going to the default state of 0
// this is a simpler render html fix to show the initial state 

dispatch({ type: '@@INIT' })
