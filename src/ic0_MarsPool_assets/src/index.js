import * as React from 'react';
import { render } from 'react-dom';
import ImageGallery from 'react-image-gallery';
import Header from './components/Header';

const images = [
  { original:'https://ipfs.io/ipfs/QmcGW92x8oqUNWonQqL8yJ4XGNQ4ZvSEs1m7xiakSxbrxT', thumbnail:'https://ipfs.io/ipfs/QmcGW92x8oqUNWonQqL8yJ4XGNQ4ZvSEs1m7xiakSxbrxT',},
  { original:'https://ipfs.io/ipfs/QmTvaiowYtgpvGDUbhyQPMrR7WZWLjWombijLaBzHgibyK', thumbnail:'https://ipfs.io/ipfs/QmTvaiowYtgpvGDUbhyQPMrR7WZWLjWombijLaBzHgibyK',},
  { original:'https://ipfs.io/ipfs/QmUY27ANdANp26jXz1rX2D3n4FgVFzG8oapxUmUYDDDWqn', thumbnail:'https://ipfs.io/ipfs/QmUY27ANdANp26jXz1rX2D3n4FgVFzG8oapxUmUYDDDWqn',},
  { original:'https://ipfs.io/ipfs/QmeKqzqSiXBDdRrbkCQuyqBcbahQbnRkn9FbdTzyVtywhT', thumbnail:'https://ipfs.io/ipfs/QmeKqzqSiXBDdRrbkCQuyqBcbahQbnRkn9FbdTzyVtywhT',},
  { original:'https://ipfs.io/ipfs/QmejyTbYnwSMsG5VGUXt6sHrF2v4WeaCUxggBdAzdK7UBQ', thumbnail:'https://ipfs.io/ipfs/QmejyTbYnwSMsG5VGUXt6sHrF2v4WeaCUxggBdAzdK7UBQ',},
  { original:'https://ipfs.io/ipfs/QmcN4rwxtHYujrrpG4fx4kUyhWKqccMWgA56PtMDhAfjfT', thumbnail:'https://ipfs.io/ipfs/QmcN4rwxtHYujrrpG4fx4kUyhWKqccMWgA56PtMDhAfjfT',},
  { original:'https://ipfs.io/ipfs/QmeXTgQWDGQjYTZJBtp7QkpEBXFMK1VRa6cYvGhT4SqFrq', thumbnail:'https://ipfs.io/ipfs/QmeXTgQWDGQjYTZJBtp7QkpEBXFMK1VRa6cYvGhT4SqFrq',},
  { original:'https://ipfs.io/ipfs/QmPgSZhV7rX6EVPoLpYC4PPtesFwLHqYy1Avjc22HQUeTQ', thumbnail:'https://ipfs.io/ipfs/QmPgSZhV7rX6EVPoLpYC4PPtesFwLHqYy1Avjc22HQUeTQ',},
  { original:'https://ipfs.io/ipfs/Qmf3TXFj1XkRZTWEzzDBtEevMK6MEHBSJKbKJ1LqGNukM2', thumbnail:'https://ipfs.io/ipfs/Qmf3TXFj1XkRZTWEzzDBtEevMK6MEHBSJKbKJ1LqGNukM2',},
  { original:'https://ipfs.io/ipfs/QmZ3zJ6yQrUTgY7DwkuGrFmPAvgxUwC6PTP7imQ7PAMakd', thumbnail:'https://ipfs.io/ipfs/QmZ3zJ6yQrUTgY7DwkuGrFmPAvgxUwC6PTP7imQ7PAMakd',},
  { original:'https://ipfs.io/ipfs/QmR7MiMMhztUb21vor6PZycWW7iWvHS4WViAwxaNHt9L6Y', thumbnail:'https://ipfs.io/ipfs/QmR7MiMMhztUb21vor6PZycWW7iWvHS4WViAwxaNHt9L6Y',},
  { original:'https://ipfs.io/ipfs/Qmc7cQTtF9DMfKswPNGyzuwmeKwgp5gsQsySk5925EdQYD', thumbnail:'https://ipfs.io/ipfs/Qmc7cQTtF9DMfKswPNGyzuwmeKwgp5gsQsySk5925EdQYD',},
  { original:'https://ipfs.io/ipfs/QmPKoPSUyuF15EbnU3Enrtyt6rM86gLQEueobGSS5Uu2Qd', thumbnail:'https://ipfs.io/ipfs/QmPKoPSUyuF15EbnU3Enrtyt6rM86gLQEueobGSS5Uu2Qd',},
  { original:'https://ipfs.io/ipfs/Qmb9HMCHHfTxsixUCJXeHmmS2tt9eazUzcSrFfFsZhDmw7', thumbnail:'https://ipfs.io/ipfs/Qmb9HMCHHfTxsixUCJXeHmmS2tt9eazUzcSrFfFsZhDmw7',},
  { original:'https://ipfs.io/ipfs/QmYLfwETw8U1CMUpVaChkz9PXG8Hj7nwkYra8EwF5mNn7n', thumbnail:'https://ipfs.io/ipfs/QmYLfwETw8U1CMUpVaChkz9PXG8Hj7nwkYra8EwF5mNn7n',},
  { original:'https://ipfs.io/ipfs/QmdV9SVtKHb5L4xnqNo9dYRk3aVrH3iN5krLCVRRVrVzdV', thumbnail:'https://ipfs.io/ipfs/QmdV9SVtKHb5L4xnqNo9dYRk3aVrH3iN5krLCVRRVrVzdV',},
  { original:'https://ipfs.io/ipfs/QmRd4N8KFhY5zxRv5APo3c9kSu8k4Ggxnn4K4RNRdQLymd', thumbnail:'https://ipfs.io/ipfs/QmRd4N8KFhY5zxRv5APo3c9kSu8k4Ggxnn4K4RNRdQLymd',},
  { original:'https://ipfs.io/ipfs/QmTPKNx46FYYbT8btP8GQW4Gi77HwYwzNFaa8S2iTn2pdc', thumbnail:'https://ipfs.io/ipfs/QmTPKNx46FYYbT8btP8GQW4Gi77HwYwzNFaa8S2iTn2pdc',},
  { original:'https://ipfs.io/ipfs/Qma28EB6rCJPbvZyMPkUtJwN9PRwgkDPjCufZnMzfCrxoR', thumbnail:'https://ipfs.io/ipfs/Qma28EB6rCJPbvZyMPkUtJwN9PRwgkDPjCufZnMzfCrxoR',},
  { original:'https://ipfs.io/ipfs/QmQRWKj7dbBh2VSR4LMHCFE4rYfTU5PhtjgXZxqbQWndfX', thumbnail:'https://ipfs.io/ipfs/QmQRWKj7dbBh2VSR4LMHCFE4rYfTU5PhtjgXZxqbQWndfX',},
  { original:'https://ipfs.io/ipfs/QmVC5h1yXiLqXDkhAounWBv61ah6UHWvz7xFVSJe9hZeLL', thumbnail:'https://ipfs.io/ipfs/QmVC5h1yXiLqXDkhAounWBv61ah6UHWvz7xFVSJe9hZeLL',},
  { original:'https://ipfs.io/ipfs/QmQsy9M6phgFwhdz2QV28e9rV6jnh2F6VWw8AhfdFLS2mv', thumbnail:'https://ipfs.io/ipfs/QmQsy9M6phgFwhdz2QV28e9rV6jnh2F6VWw8AhfdFLS2mv',},
  { original:'https://ipfs.io/ipfs/QmcpQTJCR4EhKVEBmbNmVPr3QpKruzqpdMoWgg8cdGXkp7', thumbnail:'https://ipfs.io/ipfs/QmcpQTJCR4EhKVEBmbNmVPr3QpKruzqpdMoWgg8cdGXkp7',},
  { original:'https://ipfs.io/ipfs/Qmdk8VJN9aCF7KyoqTkKgj5qqXxSnNfvGoxRuqoZgcREBQ', thumbnail:'https://ipfs.io/ipfs/Qmdk8VJN9aCF7KyoqTkKgj5qqXxSnNfvGoxRuqoZgcREBQ',}
 
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

  render() {
    return (
      <div>
      <Header></Header>
      <div style={{ "font-family": "sans-serif",color:"white" }}>
      <div style={{ "font-size": "30px",color:"white"}}>
      <p>MarsPool LAND NFT Gallery</p>
      <p> Powered by <img height="46" width="100" src="dfx.gif" style={{"display":"inline"}} alt="Dfinity" /></p>
{/*     
        <p>Enter your NFT Token ID :</p>
        <div style={{ "margin": "30px" }}>
          <input id="name" placeholder="Type text here" value={this.state.name} onChange={ev => this.onNameChange(ev)}></input>
          <button onClick={() => this.doGreet()}>Reveal !</button>
        </div>
        <div>Your MarsPool LAND Art "<span style={{ "color": "green" }}>{this.state.message}</span>"</div>
 */}      
      </div>
      <ImageGallery items={images} />
    </div>
    </div>
    );
  }
}

render(<MarsPoolMain />, document.getElementById('app'));
