import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  Stats,
  Price,
  Description,
  Links,
} from './summary.style';
import Stars from './Stars/Stars';
import StarTooltip from './Star-Tooltip/Star-Tooltip';

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOverStars: false,
      mouseOverTooltip: false,
      inTransistion: false,
      animationCounter: 0,
    };

    this.onMouseOverStars = this.onMouseOverStars.bind(this);
    this.onMouseLeaveStars = this.onMouseLeaveStars.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
    this.onMouseLeaveTooltip = this.onMouseLeaveTooltip.bind(this);
  }

  onMouseOverStars() {
    this.setState(
      ({ animationCounter }) => ({
        animationCounter: animationCounter + 1,
        mouseOverTooltip: true,
        inTransistion: false,
      }),
    );
  }

  onMouseLeaveStars() {
    this.setState(
      ({ animationCounter }) => ({
        animationCounter: animationCounter + 1,
        mouseOverTooltip: false,
        inTransistion: true,
      }),
      () => {
        setTimeout(
          () => {
            this.setState({
              animationCounter: 2,
              inTransistion: false,
            });
          },
          250,
        );
      },
    );
  }


  onMouseOverTooltip() {
    this.setState({ mouseOverTooltip: true });
  }

  onMouseLeaveTooltip() {
    this.setState({
      mouseOverTooltip: false,
      animationCounter: 0,
    });
  }

  render() {
    const { product } = this.props;
    const {
      mouseOverTooltip,
      mouseOverStars,
      inTransistion,
      animationCounter,
    } = this.state;
    const newDescriptionArr = [];
    const newDescription = product.description
      .replace('\n', '')
      .split('.');
    for (let i = 0; i < newDescription.length; i += 1) {
      newDescription[i] = newDescription[i].replace(/^\s+|\s+$/g, '');
      if (newDescription[i] !== '') {
        newDescriptionArr.push(<li key={i}><span>{newDescription[i]}</span></li>);
      }
    }
    const ratingAverage = () => (
      ((product.review_one_star_count)
      + (product.review_two_star_count * 2)
      + (product.review_three_star_count * 3)
      + (product.review_four_star_count * 4)
      + (product.review_five_star_count * 5))
      / product.review_count
    );
    return (
      <Container id="summaryCont">
        <Title>
          <h5>{product.name}</h5>
          <p>
            by
            <a href="?">
              {` ${product.manufacturer}`}
            </a>
          </p>
        </Title>
        <Stats>
          <div
            className="stars"
            onMouseEnter={this.onMouseOverStars}
            onMouseLeave={this.onMouseLeaveStars}
          >
            <Stars rating={ratingAverage()} />
            <img className="carrot" src="https://s3.us-east-2.amazonaws.com/product-summary-component/downCarrot.png" alt="material carrot" />
          </div>
          { mouseOverStars || mouseOverTooltip || inTransistion ? (
            <div
              onMouseEnter={this.onMouseOverTooltip}
              onMouseLeave={this.onMouseLeaveTooltip}
            >
              <StarTooltip
                animationCounter={animationCounter}
                ratingAvg={ratingAverage()}
                ratingsObj={
                  {
                    review_one_star_count: product.review_one_star_count,
                    review_two_star_count: product.review_two_star_count,
                    review_three_star_count: product.review_three_star_count,
                    review_four_star_count: product.review_four_star_count,
                    review_five_star_count: product.review_five_star_count,
                    review_count: product.review_count,
                  }
                }
              />

            </div>
          ) : ''
            }
          <a className="reviews" href="?">{`${product.review_count} customer reviews`}</a>
          <span> | </span>
          <a className="questions" href="?">{`${product.question_count} answered questions`}</a>
        </Stats>
        <Price>
          <div className="price">
            <p>
              Price:
            </p>
            <span className="priceNum">{` $${product.price - 0.01}`}</span>
            {product.is_prime ? <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/primeLogo.png" alt="prime Logo" /> : ''}
          </div>
          <div className="discoverBonus">
            <p>
              {'Pay '}
              { <span className="strikeThrough">{`$${product.price - 0.01}`}</span> }
              {` $${product.price - 10.01} after using available Discover Cashback Bonus®.`}
            </p>
          </div>
        </Price>
        <Description>
          {newDescriptionArr}
        </Description>
        <Links>
          <a href="#top">
            Compare with similar items
          </a>
        </Links>
        <Links>
          <a href="#top">
            <strong>New</strong>
            {` (1) from $${product.price - 0.01}`}
          </a>
          {product.is_prime ? <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/primeLogo.png" alt="prime Logo" /> : ''}
        </Links>
        <Links>
          <a href="#top">
            Report incorrect product information.
          </a>
        </Links>
        <img className="ad" src="https://images-na.ssl-images-amazon.com/images/G/01/campus/DowntownSanJose/SanJoseState._CB512681958_.png" alt="Advert" />
      </Container>
    );
  }
}

Summary.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    unique_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    primary_image: PropTypes.string.isRequired,
    review_one_star_count: PropTypes.number.isRequired,
    review_two_star_count: PropTypes.number.isRequired,
    review_three_star_count: PropTypes.number.isRequired,
    review_four_star_count: PropTypes.number.isRequired,
    review_five_star_count: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
    question_count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    total_price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    is_prime: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Summary;
