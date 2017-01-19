'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom-server'


ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

var VacancySign = React.createClass ({
  render: function(){
    var text;
    if(this.props.status){
      text = 'Vacancy';
    }
    else {
      text = 'No Vacancy';
    }

    return <div>{text}</div>
  }
});

ReactDOM.render(
  <VacancySign status={false} />,
  document.getElementById('container')
);
