
import React from 'react'
import ReactDOM from 'react-dom'
import ReactWebComponent from 'react-web-component'

import SimpleReactComponent from './components/simple_react_component/simple_react_component.js'

// Creates web component
ReactWebComponent.create(<SimpleReactComponent />, 'simple-react-web-component-with-react-router')

