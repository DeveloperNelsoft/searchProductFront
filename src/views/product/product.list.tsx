import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaterialTable from "material-table";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactLoading from 'react-loading';

import { ProductsTableRow } from './product.interface';


interface ProductsTableState {
    productsList: ProductsTableRow[],
    loading: Boolean
}

interface ProductsTableProps { }

export default class ProductsTable extends Component<ProductsTableProps, ProductsTableState> {
    constructor(props: ProductsTableProps) {
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
                this.setState({ productsList: responseData as ProductsTableRow[], loading: false })
            })
            .catch(error => {
                console.log("Error loading data", error);
            });
    }


    render() {
        const { productsList, loading } = this.state;
        let content = <ReactLoading type="bubbles" color="#DDD" />;

        if (!loading) {
            content = (
                <Paper>
                    <MaterialTable
                        columns={[
                            { title: "id", field: "id" },
                            { title: "brand", field: "brand" },
                            { title: "description", field: "description" },
                            { title: "image", field: "image" },
                            { title: "price", field: "price", type: "numeric" },
                        ]}
                        data={productsList}
                        title=""
                        localization={{
                            body: {
                              emptyDataSourceMessage: 'No hay productos'
                            },
                            toolbar: {
                              searchTooltip: 'Buscar',
                              searchPlaceholder: 'Buscar'
                            },
                            pagination: {
                              labelRowsSelect: 'por página',
                              labelDisplayedRows: '{from} de {to} | {count} productos',
                              firstTooltip: 'Principio',
                              previousTooltip: 'Anterior',
                              nextTooltip: 'Siguiente',
                              lastTooltip: 'Final'
                            }
                          }}
                        options={{
                            pageSize:20,
                            pageSizeOptions: [20, 100, 500]
                        }}
                    />
                </Paper>
            );
        }
        return (
            <Container>
                <Box my={2}>
                    <Link to="/product-grid/" >Ver Grid</Link>
                </Box>
                <Box my={12}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Lista de productos
                    </Typography>
                    {content}
                </Box>
            </Container>
        );
    }
}
