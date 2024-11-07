import { Backdrop, CircularProgress } from "@mui/material";

const Loader = ({ open = true, handleClose }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 9999 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export { Loader };
