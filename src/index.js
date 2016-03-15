import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
const YOUTUBE_API_KEY = 'AIzaSyAOJ3usoBk6PjjAh2IJywTPfcdVK7huV4E';


class App  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('metallica');
  }

  videoSearch (term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (data) => {
      this.setState({
        videos : data,
        selectedVideo: data[0]
      });
    });
  }

  render () {
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
