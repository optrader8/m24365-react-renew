import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

export type StatemenuNomalType = {
  className?: string;
};

const StatemenuNomal: NextPage<StatemenuNomalType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[222px] h-10 rounded-3xs shrink-0 flex flex-row items-start justify-start py-2.5 px-[15px] box-border ${className}`}
    >
      <TextField
        className="h-5 w-48 font-body-h6-regular text-sm text-white"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "25px" }}>
              <img width="16px" height="15.1px" src="/iconapplication-10.svg" />
            </InputAdornment>
          ),
          endAdornment: (
            <img
              width="16px"
              height="16px"
              src="/icon-elementchevrondownw-8.svg"
            />
          ),
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "86.48648648648648%",
          height: "20px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#fdfdfd",
            fontSize: 14,
            fontWeight: "Regular",
            fontFamily: "Noto Sans KR",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>고객센터</MenuItem>
      </TextField>
    </div>
  );
};

export default StatemenuNomal;
