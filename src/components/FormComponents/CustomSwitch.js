import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

export const CustomSwitch = withStyles({
	switchBase: {
		color: "#e2e2e1",
		"&$checked": {
			color: "#f31a49",
		},
		"&$checked + $track": {
			backgroundColor: "#f31a49",
		},
	},
	checked: {},
	track: {},
})(Switch);
