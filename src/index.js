import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    {/* All of the Node.js APIs are available in this renderer process.*/}
    We are using Node.js {process.versions.node},
    Chromium {process.versions.chrome},
    and Electron {process.versions.electron}.
  </div>,
  document.getElementById('root')
)
