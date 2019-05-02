// eslint-disable-next-line @typescript-eslint/no-unused-vars
let markdown: any = null
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let prettier: any = null
/*
export default function formatMarkdown(md: string) {
  if (prettier && markdown) {
    return prettier.format(md, { parser: 'markdown', plugins: [markdown] })
  } else {
    return md
  }
}
*/

export default function formatAsciiDoc(adoc: string) {
  return adoc
}

// Start lazy load
console.time('load:prettier')
;(async () => {
  const [p0, p1] = await Promise.all([
    import('prettier/standalone'),
    import('prettier/parser-markdown')
  ])
  prettier = p0.default || p0
  markdown = p1.default || p1
  console.timeEnd('load:prettier')
})()
