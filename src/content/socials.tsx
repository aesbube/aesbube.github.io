import { Typography } from "@mui/material";

const Socials = () => {
  return (
    <Typography
      fontSize={23}
      sx={{
        textAlign: "center",
        marginTop: "40px",
        color: "#cecff5",
        textDecoration: "none",
        "@media (max-width:900px)": {
          fontSize: "19px",
        },
        "@media (max-height:400px)": {
          fontSize: "19px",
        },
      }}
    >
      projects and social media links:
    </Typography>
  );
};

export default Socials;
