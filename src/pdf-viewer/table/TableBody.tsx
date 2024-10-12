import { Text, View } from "@react-pdf/renderer";
import usePdfStyles from "../styles";

const TableBody = () => {
  const styles = usePdfStyles();

  const rows = generateRows();

  return (
    <>
      {rows.map((row) => (
        <View
          key={row.position}
          style={row.position % 2 === 0 ? styles.tableRow2 : styles.tableRow1}
          wrap={false}
        >
          {renderCells(
            row,

            styles
          )}
        </View>
      ))}
    </>
  );
};

export default TableBody;

interface RowData {
  position: number;
  date: string;
  activity: string;
  employee: string;
  workingHours: number | string;
  cost: number | string;
  revenue: number | string;
  profit: number | string;
  comment: string;
  status: number | string;
  action: string;
}

const generateRows = () => {
  const rows: RowData[] = [];
  for (let i = 1; i <= 20; i++) {
    rows.push({
      position: i,
      date: `2024-10-${i}`,
      activity: `Activity ${i}`,
      employee: `Employee ${i}`,
      workingHours: i,
      cost: i * 10,
      revenue: i * 20,
      profit: i * 10,
      comment: `Comment ${i}`,
      status: i % 2 === 0 ? "Active" : "Inactive",
      action: "Edit",
    });
  }
  return rows;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCells = (row: RowData, styles: any) => {
  return (
    <>
      <Text
        key={`position-${row.position}`}
        id="position"
        style={styles.tableCellSmall}
      >
        {row.position}
      </Text>
      <Text key={`date-${row.position}`} id="date" style={styles.tableCell}>
        {row.date}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.activity}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.employee}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.workingHours}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.cost}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.revenue}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.profit}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.comment}
      </Text>
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.tableCell}
      >
        {row.status}
      </Text>
      {/* The last item in the table NEEDS to have this specific lastTableCell style */}
      <Text
        key={`activity-${row.position}`}
        id="activity"
        style={styles.lastTableCell}
      >
        {row.action}
      </Text>
    </>
  );
};
