import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution'
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js'

import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js'
import 'monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js'
// import 'monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget.js';
// import 'monaco-editor/esm/vs/editor/browser/widget/diffNavigator.js';
import 'monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js'
import 'monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations.js'
import 'monaco-editor/esm/vs/editor/contrib/caretOperations/transpose.js'
import 'monaco-editor/esm/vs/editor/contrib/clipboard/clipboard.js'
// import 'monaco-editor/esm/vs/editor/contrib/codelens/codelensController.js';
// import 'monaco-editor/esm/vs/editor/contrib/colorPicker/colorDetector.js';
// import 'monaco-editor/esm/vs/editor/contrib/comment/comment.js';
// import 'monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu.js';
import 'monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo.js'
// import 'monaco-editor/esm/vs/editor/contrib/dnd/dnd.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js'
import 'monaco-editor/esm/vs/editor/contrib/folding/folding.js'
// import 'monaco-editor/esm/vs/editor/contrib/format/formatActions.js';
// import 'monaco-editor/esm/vs/editor/contrib/goToDeclaration/goToDeclarationCommands.js';
// import 'monaco-editor/esm/vs/editor/contrib/goToDeclaration/goToDeclarationMouse.js';
// import 'monaco-editor/esm/vs/editor/contrib/gotoError/gotoError.js';
// import 'monaco-editor/esm/vs/editor/contrib/hover/hover.js';
// import 'monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js';
// import 'monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js';
// import 'monaco-editor/esm/vs/editor/contrib/links/links.js';
// import 'monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js';
// import 'monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints.js';
// import 'monaco-editor/esm/vs/editor/contrib/quickFix/quickFixCommands.js';
// import 'monaco-editor/esm/vs/editor/contrib/referenceSearch/referenceSearch.js';
// import 'monaco-editor/esm/vs/editor/contrib/rename/rename.js';
import 'monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js'
// import 'monaco-editor/esm/vs/editor/contrib/snippet/snippetController2.js';
import 'monaco-editor/esm/vs/editor/contrib/suggest/suggestController.js'

import React, { useState, useRef, useLayoutEffect } from 'react'
import { ResizeDetector } from './ResizeDetector'
// import 'monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOutline.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickOpen/gotoLine.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickCommand.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';

// (2) Desired languages:
// import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
// import 'monaco-editor/esm/vs/language/css/monaco.contribution';
// import 'monaco-editor/esm/vs/language/json/monaco.contribution';
// import 'monaco-editor/esm/vs/language/html/monaco.contribution';
// import 'monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/go/go.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/java/java.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/less/less.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js';
// import "monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js";
// import 'monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/php/php.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js';
// import "monaco-editor/esm/vs/basic-languages/python/python.contribution.js";
// import 'monaco-editor/esm/vs/basic-languages/r/r.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js';
// import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
// import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';

// import "monaco-editor/esm/vs/editor/editor.worker";
// import "monaco-editor/esm/vs/language/typescript/ts.worker";
// import "monaco-editor/esm/vs/basic-languages/markdown/markdown";

// import * as MonacoEditor from "monaco-editor/esm/vs/editor/editor.api";
;(self as any).MonacoEnvironment = {
  getWorker(moduleId: string, label: string) {
    if (label === 'json') {
      return new Worker(
        '../../../node_modules/monaco-editor/esm/vs/language/json/json.worker.js'
      )
    }
    if (label === 'css') {
      return new Worker(
        '../../../node_modules/monaco-editor/esm/vs/language/css/css.worker.js'
      )
    }
    if (label === 'html') {
      return new Worker(
        '../../../node_modules/monaco-editor/esm/vs/language/html/html.worker.js'
      )
    }
    if (label === 'typescript' || label === 'javascript') {
      return new Worker(
        '../../../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js'
      )
    }
    return new Worker(
      '../../../node_modules/monaco-editor/esm/vs/editor/editor.worker.js'
    )
  }
}

const MonacoEditor = (props: {
  value: string
  width: string
  onChangeValue: (value: string) => void
}) => {
  const [
    editor,
    setEditor
  ] = useState<null | monaco.editor.IStandaloneCodeEditor>(null)

  // react to outer change by prettier
  const [initialValue, setInitialValue] = useState(props.value)

  useLayoutEffect(() => {
    if (initialValue !== props.value) {
      setInitialValue(props.value)

      if (editor && editor.getValue() !== props.value) {
        editor.setValue(props.value)
      }
    }
  }, [editor, initialValue, props.value])

  const editorRef = useRef(null as any)

  useLayoutEffect(() => {
    if (editorRef.current) {
      const newEditor = monaco.editor.create(editorRef.current, {
        value: props.value,
        language: 'markdown',
        theme: 'vs-dark',
        scrollbar: {
          arrowSize: 11
        },
        fontSize: 16,
        wordWrap: 'on',
        wordWrapMinified: true,
        // wrappingIndent: "indent",
        minimap: {
          enabled: false
        },
        lineNumbers: 'off'
      })

      newEditor.onDidChangeModelContent(() => {
        const value = newEditor.getValue()
        props.onChangeValue(value)
      })
      newEditor.layout()
      newEditor.focus()
      setEditor(newEditor)
      return () => {
        newEditor.dispose()
      }
    }
  }, [props])

  return (
    <ResizeDetector
      style={{
        width: props.width,
        maxWidth: '960px',
        height: '100vh',
        overflow: 'none'
      }}
      onResize={rect => {
        editor &&
          editor.layout({
            width: rect.width as any,
            height: rect.height as any
          })
      }}
    >
      <div ref={editorRef} />
    </ResizeDetector>
  )
}

export default MonacoEditor
