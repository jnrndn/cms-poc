import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Card = ({ article }) => {
  const {node} = article; 
  return (
    <Link to={`/article/${node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img
            fluid={node.image.childImageSharp.fluid}
            imgStyle={{ position: "static" }}
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {node.title}
          </p>
          <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {node.author.picture && (
                  <Img
                    fluid={node.author.picture.childImageSharp.fluid}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {node.author.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;