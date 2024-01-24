import React, {Component} from 'react'
import { Tabs, Tab } from 'react-bootstrap';

export default class TabPuzzle extends Component {

constructor(props) {
  super(props);
  this.state = {
    key: 2
  };
 this.handleSelect = this.handleSelect.bind(this)
}
handleSelect(key) {
  this.setState({key});
}
render () {
  return (
    <div>
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} 
       id="controlled-tab-example">
              <Tab eventKey={1} title="Tab 1"> Tab Content 1 </Tab>
              <Tab eventKey={2} title="Tab 2"> Tab Content 2 </Tab>
              <Tab eventKey={3} title="Tab 3"> Tab Content 3 </Tab>
      </Tabs>
            
    </div>
  )
 }
}