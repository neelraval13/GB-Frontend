import React from "react";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TodayIcon from '@material-ui/icons/Today';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    textField: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(2.3),
      minWidth: "290px",
      borderColor: "white",
    },
    button: {
      height: "40px",
      fontSize: "11px",
      backgroundColor: "#ff713a",
    },
    inputStyles: {
      color: "white",
      fontFamily: ["Monsterrat", "Sans-Serif"].join(","),
      fontSize: 14,
    },
    labelStyles: {
      color: "white",
      fontSize: "11px",
    },
  }));
export const FieldDatePicker = ({ input, placeholder, minDate, maxDate }) => {
    const classes = useStyles();
   

    const ExampleCustomInput = ({ value, onClick }) => (
            <TextField
            onClick={onClick}
            value={value}
            onChange={() =>{}}
            id="outlined-uncontrolled"
            label="Birthday"
            className={classes.textField}
            variant="outlined"
            size="small"
            InputProps={{
                className: classes.inputStyles,
                endAdornment:(
                    <InputAdornment position="start">
                        <TodayIcon />
                    </InputAdornment>
                )
            }}
            InputLabelProps={{
                className: classes.labelStyles,
            }}
            
        />
        
      );
    return(
        <DatePicker
        className="date-picker"
        dateFormat="dd/MM/yyyy"
        selected={input.value || null}
        onChange={input.onChange}
        minDate={minDate}
        maxDate={maxDate}
        disabledKeyboardNavigation
        placeholderText={placeholder}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        customInput={<ExampleCustomInput />}
        showDisabledMonthNavigation={true}
        peekNextMonth={false}
        popperModifiers={{
            offset: {
              enabled: true,
              offset: "55px, 0px"
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: "viewport"
            }
          }}
    />
    )
}
