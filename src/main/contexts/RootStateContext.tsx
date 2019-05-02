import React, { useContext, useReducer } from 'react'
import { AppState } from '../../types'

interface Action {
  type: string
  payload: any
}

export const AppStateContext = React.createContext<AppState>(null as any)
export const DispatchContext = React.createContext<(action: Action) => void>(
  null as any
)

export const Provider = (props: {
  initialState: AppState
  reducer: (state: AppState, action: Action) => AppState
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(props.reducer, props.initialState)
  return (
    <AppStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}

export const useDispatch = () => {
  return useContext(DispatchContext)
}
