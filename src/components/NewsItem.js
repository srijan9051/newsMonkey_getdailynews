import React from 'react';

const NewsItem = (props) => {
  const formattedDate = (dateString) => {
    const date = new Date(dateString);

    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    // Return the date in dd/mm/yyyy format
    return `${day}/${month}/${year}`;
  };

  const { source, imageurl, title, description, author, date, newsUrl } = props;

  return (
    <div className='my-3'>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '92%', zIndex: '1' }}>
          {source.split(" ")[0] + " " + source.split(" ")[1]}
        </span>
        <img src={!imageurl ? "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By <strong>{!author ? "unknown" : author}</strong> posted on {formattedDate(date)}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
