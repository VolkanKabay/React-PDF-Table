import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useMemo } from "react";

import TableBody from "./table/TableBody";
import TableHeader from "./table/TableHeader";
import usePdfStyles from "./styles";

const PDFTemplate = () => {
  const styles = usePdfStyles();

  //* Headers for the table
  const headers = useMemo(() => {
    /* Define the position header with a different style */
    const positionHeader = {
      id: "position",
      label: "Position",
      style: styles.tableCellSmall,
    };

    const dynamicHeaders = [
      "Date",
      "Activity",
      "Employee",
      "Working Hours",
      "Cost",
      "Revenue",
      "Profit",
      "Comment",
      "Status",
      "Action",
    ].map((column, index, columns) => {
      const isLast = index === columns.length - 1;

      return {
        id: column,
        label: column,
        style: isLast ? styles.lastTableCell : styles.tableCell,
      };
    });
    return [positionHeader, ...dynamicHeaders];
  }, [styles.lastTableCell, styles.tableCell, styles.tableCellSmall]);

  return (
    <PDFViewer width={1300} height={1000} style={{ border: "none" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.h1}>
            <Text style={styles.h1}>React-PDF Table</Text>
            <View style={styles.mb8}>
              <Text style={styles.body2}>
                You can copy this template for the table and use dynamic values
                or any data you want to display in the table.
              </Text>
            </View>
            <View style={styles.mb8}>
              <Text style={styles.body2}>
                React-pdf does not support normal HTML Tables, so we have to
                create one using a lot of CSS and View and Text components.
              </Text>
            </View>
            <View style={styles.mb8}>
              <Text style={styles.coloredBody2}>
                Feel free to star the repository and contribute to the project.
              </Text>
            </View>
          </View>
          <View style={styles.table}>
            <TableHeader headers={headers} />
            <TableBody />
          </View>
          <View style={styles.footer} fixed>
            <View style={styles.col8}>
              <Text
                style={styles.body1}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
              />
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFTemplate;
