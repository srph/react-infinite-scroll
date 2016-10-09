import React from 'react';
import ReactDOM from 'react-dom';
import Infinite from '../';

const Loader = () =>
  <div className="loader">
    <div />
    <div />
    <div />
  </div>

class App extends React.Component {
  state = {
    items: [],
    loading: false
  };

  componentDidMount() {
    this.request();
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="heading">Quotes &mdash; <small>Inspiring quotes</small></h1>

        <Infinite callback={this.request} disabled={this.state.loading}>
          {this.state.items.map((item, i) =>
            <div className="card spacer" key={i}>
              <h1 className="card-quote">{item[0]}</h1>
              <h6 className="card-author">{item[1]}</h6>
            </div>
          )}
        </Infinite>

        {this.state.loading && <Loader />}
      </div>
    );
  }

  request = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        loading: false,
        items: this.state.items.concat(generate())
      });
    }, 500);
  }
}

function generate() {
  const quotes = [
    ['When there is no desire, all things are at peace', 'Laozi'],
    ['Simplicity is the ultimate sophistication', 'Leonardo da Vinci'],
    ['Simplicity is the essence of happiness', 'Cedric Bledsoe'],
    ['Smile, breathe, and go slowly', 'Thich Nhat Hanh'],
    ['Simplicity is an acquired taste', 'Katharine Gerould'],
    ['Well begun is half done', 'Aristotle'],
    ['He who is contented is rich', 'Laozi'],
    ['Very little is needed to make a happy life', 'Marcus Antoninus'],
    ['It is quality rather than quantity that matters', 'Lucius Annaeus Seneca'],
  ];

  let generated = [];

  for ( var i = 0; i < 10; i++ ) {
    generated.push(quotes[i % quotes.length]);
  }

  return generated;
}

ReactDOM.render(<App />, document.getElementById('mount'));