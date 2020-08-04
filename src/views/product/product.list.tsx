import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MaterialTable from "material-table";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactLoading from 'react-loading';

import { ProductsTableRow } from './product.interface';
import productReducer from '../../hooks/productReducer';
import * as types from '../../hooks/types';
import getAxios from '../../apiConnector/apiConnector';

interface ProductsTableState {
    productsList: ProductsTableRow[],
    loading: Boolean
}

interface ProductsTableProps { }

const ProductsTable: React.SFC<ProductsTableState> = props => {
    const [state, dispatch] = productReducer();

    useEffect(() => {
        dispatch({type: types.LOADING,});

        const urlBackend = 'http://localhost:4050/product';
        getAxios.instance('').get(urlBackend).then((result: any) => result.data)
        .then((responseData: any) => {
            dispatch({type: types.GET_PRODUCT, data: responseData as ProductsTableRow[] });
        });

        // fetch('http://localhost:4050/product',
        //   {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   })
        //     .then(response => response.json())
        //     .then(responseData => {
        //         dispatch({type: types.GET_PRODUCT, data: responseData  });
                
        //     })
        //     .catch(error => {
        //         console.log("Error loading data", error);
        //     });

    }, []);

    const configContent = () => {
        let content = <ReactLoading type="bubbles" color="#DDD" />;

        if (!state.isLoading) {
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
                        data={state.product }
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
         return content;
    }

    const addProduct = (event:any) => {

    }

    const udateProduct = (event:any) => {
        
    }

    const deleteProduct = (event:any) => {
        
    }

    return (

        <Container>
                 <Box my={2}>
                     <Link to="/product" >Ver Grid</Link>
                 </Box>
                 <Box my={12}>
                     <Typography variant="h4" component="h1" gutterBottom>
                         {`Lista de productos ` }
                     </Typography>
                     <button onClick={(event: any) => addProduct(event)} > ADDD </button>
                     <button onClick={(event:any) => udateProduct(event)} > UPDATE </button>
                     <button onClick={(event:any) => deleteProduct(event)} > DELETE </button>
                     {configContent()}
                 </Box>
             </Container>
    );

};

export default ProductsTable;


// export default class ProductsTable extends Component<ProductsTableProps, ProductsTableState> {


//     constructor(props: ProductsTableProps) {
//         super(props);

//         this.state = {
//             productsList: [],
//             loading: true,
//         };
//     }
//     componentWillMount() {

//         // const urlBackend = `https://www.getonbrd.com/search/jobs?q=${term}`;
//         // getAxios.instance('').get(urlBackend).then((result) => result.data)
//         // .then((arryJob) => {
//         //     console.log('api itemJob result: ', arryJob.jobs);
//         //     setSearching(false);
//         //     setSearchResults(arryJob.jobs);
//         // }).catch((error) => {
//         //     console.log('error: ', error);
//         //     setSearching(false);
//         //     setSearchResults(error.message);
//         // });

//     }


//     render() {
//         const { productsList, loading } = this.state;

//         return (
//             <Container>
//                 <Box my={2}>
//                     <Link to="/product" >Ver Grid</Link>
//                 </Box>
//                 <Box my={12}>
//                     <Typography variant="h4" component="h1" gutterBottom>
//                         Lista de productos
//                     </Typography>
//                     {content}
//                 </Box>
//             </Container>
//         );
//     }
// }





