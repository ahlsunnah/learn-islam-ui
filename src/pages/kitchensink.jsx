import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Header from '../components/Header'

const KitchenSink = () => (
  <div className="f4 pa4">
    <Header className="pa3 fixed top-0 right-0 left-0 z-999">
      This is my title
    </Header>
    <Card className="mt5 pa3">
      <Button elevated>Button</Button>
      <Button className="db mt4">FlatButton</Button>
    </Card>
    <Card className="mt3 pa3" to="/">
      <h3>This is a Link card</h3>
    </Card>
  </div>
)

export default KitchenSink
