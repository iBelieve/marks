import React, { PropTypes } from 'react'
import { ContentState, Editor, EditorState } from 'draft-js'

export default class MarkdownEditor extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    editorState: PropTypes.instanceOf(EditorState),
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    editorState: null
  }

  state = {
    editorState: EditorState.createEmpty()
  }

  componentWillReceiveProps({ text, editorState }) {
    if (editorState != null && editorState !== this.state.editorState) {
      this.setState({ editorState })
    } else {
      const currentText = this.state.editorState.getCurrentContent().getPlainText()

      if (currentText !== text) {
        this.setState({
          editorState: EditorState.createWithContent(ContentState.createFromText(text))
        })
      }
    }
  }

  onChange = (editorState) => {
    this.setState({ editorState }, () => {
      const text = this.state.editorState.getCurrentContent().getPlainText()
      this.props.onChange(text, editorState)
    })
  }

  render() {
    const { editorState } = this.state

    return (
      <Editor editorState={editorState} onChange={this.onChange}/>
    )
  }
}
