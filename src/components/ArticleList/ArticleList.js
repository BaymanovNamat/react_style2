import "./ArticleList.css";



function ArticleList(props) {

  const articleList = props.src.map((article) => (
      <div>
        <h3>
          <a href={article.url}>
              {article.title}
          </a>
        </h3>
        <p>
          {article.teaser}
        </p>
      </div>
  ));


  return (
    <article>
      {articleList}
    </article>
  );
}

export default ArticleList;