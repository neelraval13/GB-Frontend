import React from "react";
import { connect } from "react-redux";
import clsx from 'clsx';
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from './ProfileTabs/Timeline';
import Gameplays from './ProfileTabs/Gameplays';
import Stream from './ProfileTabs/Stream';
import Videos from './ProfileTabs/Videos';
import Photos from './ProfileTabs/Photos';
import About from './ProfileTabs/About';
import "../../styles/global/global.scss";

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
        paddingTop: "15px"
    },
    selected: {
      backgroundColor : '#ed204b',
      borderRadius : '6px',
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
    let light = props.Theme === "light";
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
                className={`${props.Theme}-border`}
                style={{borderRadius: '6px', minHeight: '60px', marginBottom: '15px'}}
            >
                <Tab 
                    label="Timeline" 
                    {...a11yProps(0)} 
                    classes={{
                        selected : classes.selected,
                        root: light ? classes.tabRootLight : classes.tabRootDark
                    }}
                />
                <Tab label="Stream" {...a11yProps(1)} 
                    classes={{
                        selected : classes.selected,
                        root: light ? classes.tabRootLight : classes.tabRootDark
                    }}
                />
                <Tab label="Gameplays" {...a11yProps(2)} 
                    classes={{
                        selected : classes.selected,
                        root: light ? classes.tabRootLight : classes.tabRootDark
                    }}
                />
                <Tab label="Videos" {...a11yProps(3)} 
                    classes={{
                        selected : classes.selected,
                        root: light ? classes.tabRootLight : classes.tabRootDark
                    }}
                />
                <Tab label="Photos" {...a11yProps(4)} 
                    classes={{
                        selected : classes.selected,
                        root: light ? classes.tabRootLight : classes.tabRootDark
                    }}
                />
                <Tab label="About" {...a11yProps(5)} 
                    classes={{
                        selected : classes.selected,
                        root: light ? classes.tabRootLight : classes.tabRootDark
                    }}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Timeline />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Stream />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Gameplays />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Videos />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Photos />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <About />
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
