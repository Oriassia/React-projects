import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function FilterSection(props) {
  return (
    <div className="content__filters-Section">
      <TextField
        id="outlined-basic"
        label="search todo"
        variant="outlined"
        value={props.searchParams.get("search")}
        onChange={(ev) => props.setSearchParams({ search: ev.target.value })}
        sx={{
          flex: "2",
          label: { top: "-5px" },
          "& .MuiOutlinedInput-root": {
            height: "40px",
            padding: "0 10px",
          },
        }}
      />

      <FormControl sx={{ m: 1, minWidth: "80px", height: "40px" }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          sx={{
            top: "-5px",
          }}
        >
          Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.selectFilter}
          onChange={(e) => props.setSelectFilter(e.target.value)}
          autoWidth
          label="Filter"
          sx={{
            height: "40px",
            "& .MuiSelect-select": {
              padding: "10px",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"active"}>Active</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterSection;
