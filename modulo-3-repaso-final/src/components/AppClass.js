import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import getApiData from '../services/api';

const App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filterName: '',
      filterPrice: 10
    };
    this.renderProductDetail = this.renderProductDetail.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
  }

  componentDidMount() {
    getApiData().then(data => {
      this.setState({
        products: data
      });
    });
  }

  handleFilters(data) {
    this.setState({
      [data.key]: data.value
    });
  }

  renderProductDetail(props) {
    const routeProductId = props.match.params.productId;
    const product = this.state.products.find(product => product.id === routeProductId);
    if (product) {
      return (
        <ProductDetail
          name={product.name}
          imageUrl={product.imageUrl}
          price={product.price}
          description={product.description}
          sizes={product.sizes}
        />
      );
    } else {
      return <p>Producto no encontrado</p>;
    }
  }

  renderFilteredProducts() {
    return this.state.products
      .filter(product => {
        return product.name.includes(this.state.filterName);
      })
      .filter(product => {
        return product.price > this.state.filterPrice;
      });
  }

  render() {
    return (
      <div>
        <h1 className="title--big">Catálogo de camisetas</h1>
        <Route exact path="/">
          <Filters
            filterName={this.state.filterName}
            filterPrice={this.state.filterPrice}
            handleFilters={this.handleFilters}
          />
          <ProductList products={this.renderFilteredProducts()} />
        </Route>
        <Switch>
          <Route path="/product/:productId" render={this.renderProductDetail} />
        </Switch>
      </div>
    );
  }
};

export default App;
