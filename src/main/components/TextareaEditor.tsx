import React, {
  SyntheticEvent,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef
} from 'react'
import styled from 'styled-components'

const TAB_STR = '  '

interface Props {
  raw: string
  onChangeValue: (value: string) => void
  onWheel: (event: SyntheticEvent<HTMLTextAreaElement>) => void
}

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef((props: Props, ref: any) => {
  const isComposing = useRef(false)
  const onCompositionStart = useCallback(() => {
    isComposing.current = true
  }, [])

  const onCompositionEnd = useCallback(
    (ev: any) => {
      isComposing.current = false
      props.onChangeValue(ev.target.value)
    },
    [props]
  )

  const onChange = useCallback(
    (ev: any) => {
      if (isComposing.current) {
        return true
      }
      props.onChangeValue(ev.target.value)
    },
    [isComposing, props]
  )

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      // Tab Indent
      if (e.keyCode === 9 && !isComposing.current) {
        e.preventDefault()
        const el: HTMLTextAreaElement = e.target as any
        let start: number = el.selectionStart
        let end: number = el.selectionEnd
        const raw = el.value
        const lineStart = raw.substr(0, start).split('\n').length - 1
        const lineEnd = raw.substr(0, end).split('\n').length - 1
        const lines = raw.split('\n')
        lines.forEach((line, i) => {
          if (i < lineStart || i > lineEnd || lines[i] === '') {
            return
          }
          if (!e.shiftKey) {
            // Insert tab at head
            lines[i] = TAB_STR + line
            start += i === lineStart ? TAB_STR.length : 0
            end += TAB_STR.length
          } else if (lines[i].substr(0, TAB_STR.length) === TAB_STR) {
            // Delete tab at head
            lines[i] = lines[i].substr(TAB_STR.length)
            start -= i === lineStart ? TAB_STR.length : 0
            end -= TAB_STR.length
          }
        })
        const newRaw = lines.join('\n')
        el.value = newRaw
        el.setSelectionRange(start, end)
        props.onChangeValue((e as any).target.value)
      }
    },
    [isComposing, props]
  )

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.selectionStart = 0
      ref.current.selectionEnd = 0
      ref.current.focus()
    }
  }, [ref])

  return (
    <StyledTextarea
      ref={ref}
      spellCheck={false}
      defaultValue={props.raw}
      onChange={onChange}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      onKeyDown={onKeydown as any}
      onWheel={props.onWheel}
    />
  )
})

const StyledTextarea = styled.textarea`
  width: 100%;
  height: calc(100vh - 10px);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 24px;
  box-sizing: border-box;
  outline: none;
  font-size: 1.1em;
  color: rgb(232, 232, 212);
  background: #272822;
  resize: none;
  border: none;
  line-height: 1.2;
  font-family: MonoAscii, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
