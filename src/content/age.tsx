import { Typography } from "@mui/material";
import Birthday from "../birthday";

const Age = () => {
  const birthDate = new Date(Birthday);
  const currDate = new Date();

  const age = Math.floor(
    (currDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <Typography
      fontSize={21}
      sx={{
        textAlign: "center",
        marginTop: "10px",
        color: "#c4c5f5",
        textDecoration: "none",
        "@media (max-width:900px)": {
          fontSize: "17px",
        },
        "@media (max-height:400px)": {
          fontSize: "17px",
        },
      }}
    >
      {age} years old
    </Typography>
  );
};

export default Age;
