import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaterialTable from "material-table";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactLoading from 'react-loading';
import { Grid, GridList, GridListTile } from '@material-ui/core';

import { ProductGridItem } from './product-grid.interface';
import ProductItem from './product-item.component';

interface ProductsListGridState {
productsList: ProductGridItem[],
loading: Boolean
}

interface ProductsListGridProps { }

export default class ProductsListGrid extends Component<ProductsListGridProps, ProductsListGridState> {
constructor(props: ProductsListGridProps) {
  super(props);

  this.state = {
    productsList: [],
    loading: true,
  };
}
componentWillMount() {
  fetch('https://searchproductback/product',
    {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUzZTE3ZDQyLWVkZjQtNDBmOS1iY2U1LTc5NjFjMjM5NmZjZiIsImVtYWlsIjoiaXZhbi5taXJzb25AY2VuY29zdWQuY2wiLCJmaXJzdF9uYW1lIjoiSXZhbiIsImxhc3RfbmFtZSI6Ik1pcnNvbiIsInNlbGxlcl9pZCI6bnVsbCwicm9sZSI6ImFkbWluIiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE1NjYzMjg4MTQsImV4cCI6MTU5ODExNDEyNywiaXNzIjoiRWlmZmVsIn0.w1vY3Rb6Rp_wBBTaojBRYurMhtiWwgH63nbIPXPm5A0',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ productsList: responseData as ProductGridItem[], loading: false })
    })
    .catch(error => {
      console.log("Error loading data", error);
    });
}

render() {
  const { productsList, loading } = this.state;
  let content: any[] = [];
  if (!loading) {
    for (const productItem of productsList) {
      content.push(<GridListTile className="product-item" cols={1}><ProductItem productItem={productItem} /></GridListTile>);
    }
  } else {
    return <ReactLoading type="bubbles" color="#DDD" />;
  }
  return (
    <Container>
      <Box my={2}>
        <Link to="/product/" >Ver Lista</Link>
      </Box>
      <Box my={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de productos
        </Typography>
      </Box>
      <Box my={12}>
        <div
          style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', overflow: 'hidden',}}
        >
          <GridList
            cellHeight={160}
            cols={4} >
            {content}
          </GridList>
        </div>
      </Box>
    </Container>
  );
}
}
