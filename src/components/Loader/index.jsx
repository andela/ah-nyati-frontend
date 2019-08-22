import React from 'react';
import Loader from 'react-loader-spinner';
import './index.scss';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      reload: <div className="loader__reload" />,
    };
  }

  componentDidMount() {
    this.timeOut();
  }

  timeOut = () => {
    setTimeout(() => {
      this.setState({
        reload: <div className="loader__reload loader__reload-show">
          Ooops! Check your network and
          <span className="loader__reload-click" onClick={this.reload}>
           Try Again
          </span>
        </div>,
      });
    }, 6000);
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="loader">
          <Loader
            type="Circles"
            color="#2E99D6"
            height={100}
            width={100}
          />
          {this.state.reload}
        </div>
      </div>
    );
  }
}
