import React, { Component } from 'react';
import NewsItem from './NewsItem';
import SmallLoader from './SmallLoader';

export class News extends Component {
  state = {
    articles: [],
    loading: true,
    totalResults: 0,
    page: 1,
    hasMore: true,
  };

  componentDidMount() {
    this.props.setProgress(10); // Trigger progress bar on initial load
    this.fetchNews();
    this.scrollObserver = new IntersectionObserver(this.handleObserver, { threshold: 1.0 });
    this.scrollObserver.observe(this.loadingRef);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.props.setProgress(10); // Trigger progress bar on category change
      this.setState({ page: 1, articles: [], hasMore: true }, () => {
        this.fetchNews();
      });
    }
  }

  fetchNews = async () => {
    const { pageSize, category, setProgress, apikey } = this.props;
    const { page } = this.state;

    let url = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    document.title=`NewsMonkey - ${this.capitalizeFirstLetter(category)}`

    if (page === 1) {
      setProgress(30); // Update progress for the first load
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    if (page === 1) {
      setProgress(60); // Update progress for the first load
    }

    if (parsedData.articles && parsedData.articles.length > 0) {
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        totalResults: parsedData.totalResults,
        loading: false,
        hasMore: prevState.articles.length + parsedData.articles.length < parsedData.totalResults,
      }));

      if (page === 1) {
        setProgress(100); // Complete progress bar for the first load
      }
    } else {
      this.setState({ hasMore: false, loading: false });
      if (page === 1) {
        setProgress(100); // Complete progress bar even if no articles
      }
    }
  };

  handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && !this.state.loading && this.state.hasMore) {
      this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchNews);
    }
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { darkMode } = this.props;
    const { articles, loading, hasMore } = this.state;

    return (
      <div className={`container my-4 ${darkMode ? 'text-white bg-dark' : ''}`}>
        <h1 className="text-center" style={{marginTop:"60px",marginBottom:"50px"}}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>

        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                source={element.source.name}
                description={element.description}
                author={element.author}
                date={element.publishedAt}
                imageurl={element.urlToImage}
                newsUrl={element.url}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>

        {loading && hasMore && this.state.page > 1 && <SmallLoader />} {/* Show SmallLoader during scrolling */}

        <div ref={(loadingRef) => (this.loadingRef = loadingRef)} />
      </div>
    );
  }
}

export default News;


