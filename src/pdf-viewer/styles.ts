import { Font, StyleSheet } from "@react-pdf/renderer";

// ----------------------------------------------------------------------

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf",
      fontWeight: 700,
    },
  ],
});

// ----------------------------------------------------------------------

// Custom styles for PDF (Some might be unnecessary)

const createStyles = () => {
  const primaryColor = "#b4b4b4";

  return StyleSheet.create({
    col4: { width: "25%" },
    col8: { width: "100%", textAlign: "right" },
    col6: { width: "28%" },
    colBold: { fontWeight: 700 },
    mb8: { marginBottom: 8 },
    mb40: { marginBottom: 40 },
    overline: {
      fontSize: 7,
      marginBottom: 8,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    underline: { fontSize: 7, fontWeight: 700, textDecoration: "underline" },
    h1: { fontSize: 18, fontWeight: 700 },
    h3: { fontSize: 16, fontWeight: 700 },
    h4: { fontSize: 13, fontWeight: 700 },
    h5: { fontSize: 11, fontWeight: 700 },
    h6: { fontSize: 10, fontWeight: 700 },
    body1: { fontSize: 6 },
    body2: { fontSize: 10, fontWeight: 400 },
    coloredBody2: { fontSize: 10, fontWeight: 400, color: "#ff2929" },
    subtitle2: { fontSize: 5, fontWeight: 700 },
    alignRight: { textAlign: "right" },
    page: {
      paddingVertical: "40px",
      paddingHorizontal: "24px",
      fontSize: 9,
      lineHeight: 1.6,
      fontFamily: "Roboto",
      backgroundColor: "#fff",
    },
    footer: {
      left: 0,
      right: 0,
      bottom: 0,
      padding: 24,
      margin: "auto",
      position: "absolute",
    },
    gridContainer: { flexDirection: "row", justifyContent: "space-between" },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    table: {
      width: "100%",
      borderStyle: "solid",
      borderColor: primaryColor,
      backgroundColor: "#fff",
      borderWidth: 0,
      marginTop: 20,
      marginBottom: 20,
    },
    tableRow1: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#f5f5f5",
      borderWidth: 0.5,
      borderColor: primaryColor,
    },
    tableRow2: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#fff",
      borderWidth: 0.5,
      borderColor: primaryColor,
    },
    tableRowClear: {
      flexDirection: "row",
      width: "100%",
    },
    tableHeader: {
      flexDirection: "row",
      width: "100%",
      borderWidth: 0.5,
      borderColor: primaryColor,
      textAlign: "left",
      borderBottomWidth: 1,
    },
    tableCell: {
      fontSize: 5,
      borderRightWidth: 0.5,
      borderRightColor: primaryColor,
      textAlign: "left",
      width: "10%",
      padding: 1,
    },
    tableCellSmall: {
      fontSize: 5,
      width: "3%",
      borderRightWidth: 0.5,
      borderRightColor: primaryColor,
      textAlign: "left",
      padding: 1,
    },
    lastTableCell: {
      borderRightWidth: 0,
      width: "8%",
      fontSize: 5,
      textAlign: "left",
      padding: 1,
    },
  });
};

// Custom hook to get styles with theme
const usePdfStyles = () => {
  return createStyles();
};

export default usePdfStyles;
