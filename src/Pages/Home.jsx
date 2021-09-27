import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import About from './About';
import Contact from './Contact';

const Home = props => {
    const { match , history } = props;
    const { params } = match;
    const { page } = params;

    const TabNameToIndex ={
        0 : 'about',
        1 : 'contact'
    }

    const indexToTabName = {
        'about' : 0,
        'contact' : 1
    }
    
    const [selectedTab, setSelectedtab] = React.useState([indexToTabName[page]]);
    const handleChange = (event, newValue) => {
        history.push(`/home/${TabNameToIndex[newValue]}`)

        setSelectedtab(newValue);
    };
    return (
        <>
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="About"/>
                <Tab label="Contact US"/>
            </Tabs>
            {selectedTab === 0 && <About />}
            {selectedTab === 1 && <Contact />}
        </>
    )
}

export default Home