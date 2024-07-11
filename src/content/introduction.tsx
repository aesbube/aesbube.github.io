import { Link, Tooltip, Typography } from "@mui/material";

const Introduction = () => {
  return (
    <Typography
      fontSize={21}
      sx={{
        textAlign: "center",
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
      Software Engineering student @{" "}
      <Tooltip title="finki.ukim.mk">
        <Link
          href="https://www.finki.ukim.mk/"
          sx={{
            color: "#d7d8f5",
            textDecoration: "none",
            transition: "color 2s ease",
            "&:hover": {
              color: "#ffffff",
              textDecoration: "underline",
            },
          }}
          target="_blank"
        >
          FINKI
        </Link>
      </Tooltip>
    </Typography>
  );
};

export default Introduction;
