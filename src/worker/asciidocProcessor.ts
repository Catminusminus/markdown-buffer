import Asciidoctor from 'asciidoctor'
import AsciidoctorKatex from 'asciidoctor-katex'
import HighlightJsExt from 'asciidoctor-highlight.js'
import PlantUml from 'asciidoctor-plantuml'

const asciidoctor = Asciidoctor()
AsciidoctorKatex.register(asciidoctor.Extensions)
HighlightJsExt.register(asciidoctor.Extensions)
PlantUml.register(asciidoctor.Extensions)

let outline: any = []
const defaultProcessor = asciidoctor
let processor = defaultProcessor

export const replaceProcessor = (newProcessor: any) => {
  processor = newProcessor
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const compile = (raw: string, cursor?: number) => {
  const html: string = processor.convert(raw, {
    attributes: { showtitle: true, 'source-highlighter': 'highlightjs-ext' }
  })
  return {
    html,
    outline
  }
}
