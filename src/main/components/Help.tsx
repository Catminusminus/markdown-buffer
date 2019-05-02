import React from 'react'

// eslint-disable-next-line react/display-name
export const Help = React.memo(() => {
  return (
    <div style={{ padding: 10 }}>
      <dl>
        <dt>Cmd-S | Windows-S</dt>
        <dd>Run prettier</dd>

        <dt>Ctrl-1</dt>
        <dd>Toggle Preview</dd>

        <dt>Ctrl-Shift-E</dt>
        <dd>Switch editor-mode</dd>
      </dl>
    </div>
  )
})
