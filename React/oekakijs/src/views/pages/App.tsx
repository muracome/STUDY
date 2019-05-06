import React, { Component } from 'react'

import './App.scss'

import Atelier from '../containers/Atelier'

interface Props {
  onLoaded: () => void
}

class App extends Component<Props, {}> {
  // class App extends Component {
  public componentDidMount(): void {
    this.props.onLoaded()
  }

  public render(): JSX.Element {
    return (
      <Atelier />
      // <Switch>
      //   <Route path="/" exact component={Atelier} />
      //   <Redirect to="/" />
      // </Switch>
    )
  }
}

export default App
