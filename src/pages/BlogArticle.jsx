import { Link, useParams } from "react-router-dom";
import Layout from "../components/common/layout/Layout/Layout";
import SEO from "../components/common/SEO/SEO";
import { blogData } from "../data/blogData";
import "./BlogArticle.css";

function BlogArticle() {
  const { slug } = useParams();
  const article = blogData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <Layout>
        <SEO title="Article not found" description="The requested Cowrie Protocol article could not be found." />
        <div className="blog-article blog-article-empty">
          <h1>Article not found</h1>
          <Link to="/">Return to Cowrie Protocol</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={article.title} description={article.excerpt} />
      <article className="blog-article">
        <Link className="blog-article-back" to="/">← Back to Cowrie Protocol</Link>
        <div className="blog-article-meta">{article.category} · {article.date}</div>
        <h1>{article.title}</h1>
        <p className="blog-article-lead">{article.excerpt}</p>
        <img className="blog-article-image" src={article.image} alt="" />
        <div className="blog-article-body">
          {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="blog-article-cta" to="/docs">Explore the documentation →</Link>
      </article>
    </Layout>
  );
}

export default BlogArticle;
