import * as React from 'react';
import { render } from 'react-dom';
import ImageGallery from 'react-image-gallery';

import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as ic0_MarsPool_idl, canisterId as ic0_MarsPool_id } from 'dfx-generated/ic0_MarsPool';

const agent = new HttpAgent();
const ic0_MarsPool = Actor.createActor(ic0_MarsPool_idl, { agent, canisterId: ic0_MarsPool_id });

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
// Modify the front-end in the React JavaScript
class MarsPoolMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
      <div style={{ "font-family": "sans-serif" }}>
      <div style={{ "font-size": "30px" }}>
          <p>Welcome to MarsPool !</p>
          <p> Enter your NFT Token ID :</p>

        <div style={{ "margin": "30px" }}>
          <input id="name" placeholder="Type text here" value={this.state.name} onChange={ev => this.onNameChange(ev)}></input>
          <button onClick={() => this.doGreet()}>Reveal !</button>
        </div>
        <div>Your MarsPool LAND Art "<span style={{ "color": "green" }}>{this.state.message}</span>"</div>
      </div>
      <ImageGallery items={images} />
    </div>
    );
  }
}

render(<MarsPoolMain />, document.getElementById('app'));

/*
document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await ic0_MarsPool.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
*/