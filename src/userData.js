  
  const initialState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ]
  
  export default function userData(state = initialState, action) {
    switch (action.type) {
      case 'success':
        return [
          ...state,
        ]
      default:
        return state
    }
  }
  