import React, { Component } from 'react'
import ProductCategoryRow from './productcategoryrow'
import ProductRow from './productrow'
class ProductTable extends React.Component {
        render() {
          const rows = [];
          let lastCategory = null;
          const filterText = this.props.filterText;
          const inStockOnly = this.props.inStockOnly;
          
          this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
              return;
            }
            if (inStockOnly && !product.stocked) {
              return;
            }
            

            if (product.category !== lastCategory) {
              rows.push(
                <ProductCategoryRow
                  category={product.category}
                   />
              );
            }
            rows.push(
              <ProductRow
                product={product}
                />
            );
            lastCategory = product.category;
          });
      
          return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          );
        }

}
export default ProductTable