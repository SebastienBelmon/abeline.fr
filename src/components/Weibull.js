import React from 'react';
import { Bar } from 'react-chartjs-2';
import isEqual from 'lodash/isEqual';

import pdf from 'distributions-weibull-pdf';

class Weibull extends React.Component {
  state = {
    nbBar: 50,
    labels: Array.from(Array(50).keys()).map(o => o + 1),
    lambda: 15,
    k: 2,
    data: [],
  };

  handleChange = name => e => {
    this.setState({ [name]: Number(e.target.value) });
  };

  componentDidMount() {
    const { labels, k, lambda } = this.state;
    this.setState({
      data: pdf(labels, { k, lambda }),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const isNbBarSame = isEqual(prevState.nbBar, this.state.nbBar);
    const isLambdaSame = isEqual(prevState.lambda, this.state.lambda);
    const isKSame = isEqual(prevState.k, this.state.k);

    if (!isNbBarSame) {
      const { k, lambda, nbBar } = this.state;
      const labels = Array.from(Array(nbBar).keys()).map(o => o + 1);
      const data = pdf(labels, { k, lambda });
      this.setState({
        labels,
        data,
      });
    }

    if (!isLambdaSame || !isKSame) {
      const { labels, k, lambda } = this.state;
      const data = pdf(labels, { k, lambda });
      this.setState({ data });
    }
  }

  render() {
    const { nbBar, labels, k, lambda, data } = this.state;

    return (
      <div>
        <div>
          <span>
            Nombre d'occurence :
            <input
              type="range"
              min={1}
              max={200}
              value={nbBar}
              onChange={this.handleChange('nbBar')}
            />
            {nbBar}
          </span>
        </div>
        <div>
          <span>
            lambda :
            <input
              type="range"
              min={1}
              max={100}
              value={lambda}
              onChange={this.handleChange('lambda')}
            />
            {lambda}
          </span>
        </div>
        <div>
          <span>
            k :
            <input
              type="range"
              min={0.01}
              max={6}
              step={0.01}
              value={k}
              onChange={this.handleChange('k')}
            />
            {k}
          </span>
        </div>
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: 'Distribution de la loi de Weibull',
                borderWidth: 2,
                data,
                backgroundColor: labels.map(() => '#80deea'),
                borderColor: labels.map(() => '#0097a7'),
                hoverBackgroundColor: labels.map(() => '#00838f'),
                hoverBorderColor: labels.map(() => '#004d40'),
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            responsive: true,
          }}
        />
      </div>
    );
  }
}

export default Weibull;
