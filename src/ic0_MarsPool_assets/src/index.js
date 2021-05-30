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
      </div>
      <ImageGallery items={images} />
    </div>
    </div>
    );
  }
}

render(<MarsPoolMain />, document.getElementById('app'));
