import React from 'react';

const styles = {
  '@page': {
    size: 'A4',
    margin: '1cm',
    '@frame': {
      footer: {
        '-pdf-frame-content': 'footerContent',
        bottom: '0cm',
        marginLeft: '9cm',
        marginRight: '9cm',
        height: '1cm',
      },
    },
  },
  '@import': 'url("https://fonts.googleapis.com/css2?family=Bacasime+Antique&display=swap")',
  body: {
    fontFamily: "'Oswald', serif",
    fontWeight: 500,
  },
  b: {
    color: '#0b6bcb',
  },
  invoiceBox: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '30px',
    border: '2px solid #eee',
    boxShadow: '0 0 10px rgba(0, 0, 0, .15)',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: "'Oswald', serif",
    fontWeight: 400,
    color: 'black',
  },
  table: {
    width: '100%',
    lineHeight: 'inherit',
    textAlign: 'left',
  },
  tableCell: {
    padding: '5px',
    verticalAlign: 'top',
  },
  tableCellRight: {
    textAlign: 'right',
  },
  trTop: {
    table: {
      td: {
        paddingBottom: '10px',
      },
    },
    title: {
      a: {
        fontSize: '26px',
        lineHeight: '45px',
        color: '#000',
        textDecoration: 'none',
      },
    },
  },
  trInformation: {
    td: {
      paddingBottom: '5px',
    },
  },
  trHeading: {
    td: {
      background: '#eee',
      borderBottom: '1px solid #ddd',
      fontWeight: 'bold',
    },
  },
  trItem: {
    td: {
      borderBottom: '1px solid #eee',
    },
  },
  trItemLast: {
    td: {
      borderBottom: 'none',
    },
  },
  trTotal: {
    td: {
      nthChild_2: {
        borderTop: '2px solid #eee',
        fontWeight: 'bold',
      },
    },
  },
  mediaQuery: {
    onlyScreenMax600: {
      tableTrTopTableTd: {
        width: '100%',
        display: 'block',
        textAlign: 'center',
      },
      tableTrInformationTableTd: {
        width: '100%',
        display: 'block',
        textAlign: 'center',
      },
    },
  },
  rtl: {
    direction: 'rtl',
    font: {
      family: "'Oswald', sans-serif",
    },
    table: {
      textAlign: 'right',
    },
    tableTrTdNthChild_2: {
      textAlign: 'left',
    },
  },
  orderpd: {
    paddingBottom: '-9px',
  },
  orderpd2: {
    paddingBottom: '-9px',
    textAlign: 'right',
  },
  orderpd3: {
    color: 'red',
    textAlign: 'right',
  },
};

const ReactInvoice = ({
  orderID,
  orderDate,
  customerName,
  customerEmail,
  customerMobile,
  shipmentAddress,
  productName,
  productDescription,
  singleProductPrice,
  productQtd,
  productRat,
  productRev,
  orderStatus,
  totalPrice,
  productPrice,
  discPrice,
  discPct,
  delPrice,
  finalPrice,
}) => {
  return (
    <div style={styles.invoiceBox}>
      <table style={styles.table} cellPadding="0" cellSpacing="0">
        <tbody>
          <tr style={styles.trTop}>
            <td colSpan="2">
              <table style={styles.trTop.table} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>
                      <div>
                        <a href="https://apnamarket.site" style={styles.trTop.title.a}>
                          ApnaMarket - Invoice
                        </a>
                      </div>
                    </td>
                    <td>
                      <h3 style={styles.orderpd}>Order ID: {orderID}</h3>
                      <h3 style={styles.orderpd}>Order Date: {orderDate}</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style={styles.trInformation}>
            <td colSpan="2">
              <table style={styles.table} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>
                      <b>Customer :</b> {customerName}
                      <br />
                      <b>Customer Email:</b> {customerEmail}
                    </td>
                    <td>
                      <b>Contact Number :</b> {customerMobile}
                      <br />
                      <b>Shipment Address :</b> {shipmentAddress}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style={styles.trInformation}>
            <td colSpan="2">
              <table style={styles.table} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>
                      <b>Product:</b> {productName}
                      <br />
                      <b>Description:</b>
                      {/* {productDescription.length > 200 */}
                        {/* ? `${productDescription.slice(0, 200)}...` */}
                        {/* : productDescription} */}
                    </td>
                    <td>
                      <b>Product Price (1 item) :</b> Rs.{singleProductPrice}
                      <br />
                      <b>Product Quantity :</b> {productQtd}
                      <br />
                      <b>Product Rating:</b> {productRat}
                      <br />
                      <b>Product Review:</b> {productRev}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style={styles.trInformation}>
            <td colSpan="2">
              <table style={styles.table} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={styles.trHeading}>
                      <div>
                        <b>Order Status :</b> {orderStatus}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style={styles.trTop}>
            <td colSpan="2">
              <table style={styles.trTop.table} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>
                      <div>
                        <a>
                          <b>Grand Total</b>
                        </a>
                      </div>
                    </td>
                    <td>
                      <h6 style={styles.orderpd2}>Maximum Retail Price: Rs.{totalPrice}</h6>
                      <h6 style={styles.orderpd2}>Discounted Price: Rs.{productPrice}</h6>
                      <h6 style={styles.orderpd2}>Total Discount: Rs.{discPrice}</h6>
                      {/* <h6 style={styles.orderpd2}>Discount in Percent: {discPct.toFixed(2)}%</h6> */}
                      {delPrice === 0 ? (
                        <h6 style={styles.orderpd2}>Shipping Price: Free</h6>
                      ) : (
                        <h6 style={styles.orderpd2}>Shipping Price: Rs.{delPrice}</h6>
                      )}
                      <h1 style={styles.orderpd3}>Final Price: Rs.{finalPrice}</h1>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReactInvoice;
