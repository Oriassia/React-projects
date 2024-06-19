import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function FilterSection(props) {
  return (
    <div className="content__search">
      <TextField
        id="outlined-basic"
        label="search todo"
        variant="outlined"
        value={props.searchInputValue}
        onChange={(e) => props.setSearchInputValue(e.target.value)}
      />

      <FormControl sx={{ m: 1, minWidth: "80px" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.selectFilter}
          onChange={(e) => props.setSelectFilter(e.target.value)}
          autoWidth
          label="Filter"
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
