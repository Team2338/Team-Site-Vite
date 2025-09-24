import React from 'react';
import './Landing-Page.scss';
import Landing from "./Landing/Landing-Top";
import Details from "./Details/Landing-Details";

const FullLanding: React.FC = () => {
    return (
        <React.Fragment>
            <Landing />
            <Details />
        </React.Fragment>
    );
};

export default FullLanding;