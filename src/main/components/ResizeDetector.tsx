import React, { useRef, useLayoutEffect } from 'react'

/*
How to use

  <ResizeDetector
    style={{
      width: "50vw",
      height: "100vh",
      overflow: "none"
    }}
    onResize={rect => {
      // resize monaco-editor
      editor &&
        editor.layout({
          width: rect.width as any,
          height: rect.height as any
        });
    }}
  >
    <MonacoEditor
      {...{
        editor,
        value: 'hello',
        editorDidMount: editorDidMount
      }}
    />
  </ResizeDetector>
*/

interface Rect {
  x: string
  y: string
  width: string
  height: string
  top: string
  right: string
  bottom: string
  left: string
}

export function ResizeDetector(props: {
  children: any
  onResize: (rect: Rect) => void
  style?: React.CSSProperties
}) {
  const containerRef: React.RefObject<HTMLDivElement> = useRef(null as any)
  useLayoutEffect(() => {
    const container = containerRef.current
    if (container) {
      const observer = new ResizeObserver(
        (
          entries: {
            target: HTMLElement
            contentRect: Rect
          }[]
        ) => {
          entries.forEach(({ contentRect }) => {
            props.onResize(contentRect)
          })
        }
      )
      observer.observe(container)
      return () => {
        observer.unobserve(container)
        observer.disconnect()
      }
    }
  }, [props, props.children])
  return (
    <div style={props.style} ref={containerRef}>
      {props.children}
    </div>
  )
}
