import type { NextPage } from "next";
import { Button } from "@mui/material";

export type ButtontextType = {
  className?: string;
};

const Buttontext: NextPage<ButtontextType> = ({ className = "" }) => {
  return (
    <Button
      className={`w-[474px] h-10 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] ${className}`}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fdfdfd",
        fontSize: "14",
        background: "#273168",
        borderRadius: "10px",
        "&:hover": { background: "#273168" },
        width: 474,
        height: 40,
      }}
    >
      로그인
    </Button>
  );
};

export default Buttontext;
