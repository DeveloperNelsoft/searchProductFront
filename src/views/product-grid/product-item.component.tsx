import React, { Component } from 'react';
import { ProductGridItem } from './product-grid.interface';
import { Grid, Typography, GridListTile } from '@material-ui/core';

interface ProductItemState { }

interface ProductItemProps {
  productItem: ProductGridItem,
}

export default class ProductItem extends Component<ProductItemProps, ProductItemState> {
  constructor(props: ProductItemProps) {
    super(props);
  }



  render() {
    const { productItem } = this.props;
    return (
      <div>
        <Grid>
          <Grid  container>
            <Grid item xs={10}>
              <Typography variant="h5" component="h1" gutterBottom>
                {productItem.brand}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              ...
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img src={productItem.image} width={200} height={160} />
          </Grid>
          <Grid item xs={12} style={{ backgroundColor: "#DDDDDD" }}>
            id or sku: {productItem.id}
          </Grid>
          <Grid container style={{ fontSize: 10 }}>
            <Grid item xs={6}>
            {productItem.price}
              </Grid>
            <Grid item xs={6}>
            description: {productItem.fdescription}
              </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
