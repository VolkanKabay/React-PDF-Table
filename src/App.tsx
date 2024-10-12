import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import PDFTemplate from "./pdf-viewer/PDFTemplate";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="contained"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "200px",
          height: "50px",
          margin: "auto",
        }}
      >
        Open PDF-Template
      </Button>
      <Dialog open={isOpen} maxWidth="xl" onClose={() => setIsOpen(false)}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginRight={4}
        >
          <DialogTitle>
            <Typography variant="h4" fontWeight={500}>
              PDF-Template
            </Typography>
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => setIsOpen(false)}
              color="error"
              variant="outlined"
              sx={{ width: "100px" }}
            >
              Abort
            </Button>

            <Button
              color="success"
              variant="contained"
              sx={{ width: "100px" }}
              onClick={() => setIsOpen(false)}
            >
              Save
            </Button>
          </DialogActions>
        </Stack>
        <DialogContent>
          <PDFTemplate />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
