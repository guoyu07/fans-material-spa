import React, { Component } from 'react';
import TopicListItem from '../components/modules/TopicListItem';
import api from '../axios';

class Home extends Component {

  state = {
    topics: []
  }

  render() {

    const { topics } = this.state;

    return (
      <div>

        {topics.map(topic => (
          <TopicListItem topic={topic} key={topic.id} />
        ))}

      </div>
    );
  }

  componentDidMount() {

    api.get('/forum->topics', {
      validateStatus: status => status === 200
    }).then(({ data }) => {
      this.setState({ topics: data });
    }).catch(() => {
      alert('加载错误');
    });
  }
}

export default Home;
