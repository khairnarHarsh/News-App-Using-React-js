
import img from  '../assets/news.jpg'
const NewsItem = ({ title, description, Imgsrc, url }) => {
  return (
    <div className="card mb-3 bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Imgsrc?Imgsrc:img} style={{height:"200px",width:"360px"}} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"News description is nun"}</p>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
