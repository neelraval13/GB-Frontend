import React from "react";
import { connect } from "react-redux";
import clsx from 'clsx';
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <div>
                {children}
            </div>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(5)
    },
    selected: {
      backgroundColor : '#ed204b',
      borderRadius : '4px',
      color: 'white !important'
    },
    tabRootLight: {
      textTransform: 'none',
      fontWeight: '600',
      fontSize: '18px',
      color: 'black',
      minHeight: '60px'
    },
    tabRootDark: {
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '18px',
        color: 'white',
        minHeight: '60px'
    },
    tabsFlex: {
        justifyContent: 'space-between'
    }
}));

const ProfileTabs = props => {
    let dark = props.Theme === "dark";
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            className={classes.root}
        >
            <Tabs 
                value={value} 
                onChange={handleChange} 
                classes={{
                    flexContainer: classes.tabsFlex
                }}
                variant="fixed"
                scrollButtons="off"
                aria-label="simple tabs example"
                indicatorColor="none"
                style={dark ? {border: '1px solid #656565', borderRadius: '4px', minHeight: '60px'} : {border: '1px solid #c5c5c5', borderRadius: '4px', minHeight: '60px'}}
            >
                <Tab 
                    label="Timeline" 
                    {...a11yProps(0)} 
                    classes={{
                        selected : classes.selected,
                        root: dark ? classes.tabRootDark : classes.tabRootLight
                    }}
                    dark = { dark }
                />
                <Tab label="Stream" {...a11yProps(1)} 
                    classes={{
                        selected : classes.selected,
                        root: dark ? classes.tabRootDark : classes.tabRootLight
                    }}
                />
                <Tab label="Gameplays" {...a11yProps(2)} 
                    classes={{
                        selected : classes.selected,
                        root: dark ? classes.tabRootDark : classes.tabRootLight
                    }}
                />
                <Tab label="Videos" {...a11yProps(3)} 
                    classes={{
                        selected : classes.selected,
                        root: dark ? classes.tabRootDark : classes.tabRootLight
                    }}
                />
                <Tab label="Photos" {...a11yProps(4)} 
                    classes={{
                        selected : classes.selected,
                        root: dark ? classes.tabRootDark : classes.tabRootLight
                    }}
                />
                <Tab label="About" {...a11yProps(5)} 
                    classes={{
                        selected : classes.selected,
                        root: dark ? classes.tabRootDark : classes.tabRootLight
                    }}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
        </div>
    );
}

const mapStateToProps = state => {
	return {
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(ProfileTabs);
