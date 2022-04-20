
// import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactWebComponent from 'react-web-component'

// import SimpleReactComponent from './components/simple_react_component/simple_react_component.js'

// // Creates web component
// ReactWebComponent.create(<SimpleReactComponent />, 'simple-react-web-component-with-react-router')

// --------

// https://stackoverflow.com/questions/54430119/how-to-mount-styles-inside-shadow-root-using-cssinjs-jss

import * as React from 'react';
import { render } from 'react-dom';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';

import SimpleReactComponent from './components/simple_react_component/simple_react_component.js'

class MyWebComponent extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('span');
    const reactRoot = shadowRoot.appendChild(mountPoint);
    const jss = create({
      ...jssPreset(),
      insertionPoint: reactRoot
    });

    render(
      <StylesProvider jss={jss}>
        <SimpleReactComponent />
      </StylesProvider>,
      mountPoint
    );
  }
}
customElements.define('simple-react-web-component-with-react-router', MyWebComponent);