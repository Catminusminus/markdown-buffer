export interface Item {
  raw: string
  html: string
  id: string
  updatedAt: number
}

export type ItemWithOutline = Item & {
  outline: any[]
}

export type EditorMode = 'textarea' | 'codemirror' | 'monaco'
export type ToolMode = 'preview' | 'outline' | 'help'

export interface AppState {
  wordCount: number
  raw: string
  html: string
  outline: any[]
  showPreview: boolean
  toolMode: ToolMode
  editorMode: EditorMode
}
