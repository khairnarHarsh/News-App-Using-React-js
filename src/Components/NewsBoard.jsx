import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category,page,setPage }) => {
  const [articles, setArticles] = useState([]);
  
  console.log(articles);
  useEffect(() => {
  
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=c5327f36550e415bbd9506be1d63d18f&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(data=>{setArticles(data.articles)});
      
      
    ;
  }, [category,page]);
  console.log(articles);
  
  return (
    <div>
      <h1
        className="text-left "
        style={{ marginLeft: "100px", marginTop: "50px" }}
      >
        Latest
        <span className="mx-2 badge bg-danger fs-5"> News</span>
      </h1>
     <div className="container" >
     {articles.map((news, index) => {
        return<NewsItem
        kew={index}
        title={news.title}
        description={news.description}
        Imgsrc={news.urlToImage}
        url={news.url}
      />
      })}
     </div>
     <div class="d-flex justify-content-between my-5 " style={{padding:"10px 120px" }}>
     <button
            disabled={page <= 1}
            type="button"
            onClick={()=>setPage(page-1)}
            className="btn btn-dark"
          >
            &larr; Previouse
          </button>
          <button
            disabled={page >= 5}
            type="button"
            onClick={()=>setPage(page+1)}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
     </div>
    </div>
  );
};

export default NewsBoard;
