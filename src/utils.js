export function getNoteTitleAndExcerpt(text) {
  const title = text.split('\n', 1)[0]
  const excerpt = text.substr(title.length + 1)

  return { title, excerpt }
}
