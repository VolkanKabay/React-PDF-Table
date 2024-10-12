import { Text, View } from "@react-pdf/renderer";
import usePdfStyles from "../styles";

type TableHeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: { id: string; label: string; style: any }[];
};

const TableHeader = ({ headers }: TableHeaderProps) => {
  const styles = usePdfStyles();

  return (
    <View style={styles.tableHeader}>
      <View style={styles.tableRowClear}>
        {headers.map((header) => (
          <View key={header.id} style={header.style}>
            <Text style={styles.subtitle2}>{header.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TableHeader;
