import React from 'react'

interface Props {
  wordCount: number
  onClick: (e: any) => void
}

export const BottomHelper = React.memo(function BottomHelper(props: Props) {
  return (
    <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
      <span style={{ fontFamily: 'monospace', color: 'cornflowerblue' }}>
        {props.wordCount}
      </span>
      &nbsp;
      <button onClick={props.onClick}>👀</button>
    </div>
  )
})
