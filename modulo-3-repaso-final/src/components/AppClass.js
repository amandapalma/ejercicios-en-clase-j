import React from 'react';
import Filters from './Filters';
import ProductList from './ProductList';
// import ProductDetail from './ProductDetail';
import getApiData from '../services/api';

const App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getApiData().then(data => {
      this.setState({
        products: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1 className="title--big">Catálogo de camisetas</h1>
        <Filters />
        <ProductList products={this.state.products} />

        {/* <ProductDetail
          name="JavaScript"
          imageUrl="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/javascript.jpg"
          price="15"
          description="Tremenda camiseta"
          sizes={['s', 'l', 'xl']}
        /> */}
      </div>
    );
  }
};

export default App;
