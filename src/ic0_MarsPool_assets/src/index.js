import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as ic0_MarsPool_idl, canisterId as ic0_MarsPool_id } from 'dfx-generated/ic0_MarsPool';

const agent = new HttpAgent();
const ic0_MarsPool = Actor.createActor(ic0_MarsPool_idl, { agent, canisterId: ic0_MarsPool_id });

// Insert these lines after the import statements for
// importing an agent and an actor
import * as React from 'react';
import { render } from 'react-dom';

// Replace the default index.js content with
// React JavaScript
class MyHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name',
      message: '',
    };
  }

  async doGreet() {
    const greeting = await ic0_MarsPool.greet(this.state.name);
    this.setState({ ...this.state, message: greeting });
  }

  onNameChange(ev) {
    this.setState({ ...this.state, name: ev.target.value });
  }

  render() {
    return (
      <div style={{ "font-size": "30px" }}>
        <div style={{ "background-color": "yellow" }}>
          <p>Greetings, from DFINITY!</p>
          <p> Type your message in the Name input field, then click <b> Get Greeting</b> to display the result.</p>
        </div>
        <div style={{ "margin": "30px" }}>
          <input id="name" value={this.state.name} onChange={ev => this.onNameChange(ev)}></input>
          <button onClick={() => this.doGreet()}>Get Greeting!</button>
        </div>
        <div>Greeting is: "<span style={{ "color": "blue" }}>{this.state.message}</span>"</div>
      </div>
    );
  }
}

render(<MyHello />, document.getElementById('app'));

/*
document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await ic0_MarsPool.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
*/