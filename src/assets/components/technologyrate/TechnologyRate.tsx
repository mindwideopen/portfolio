import React from 'react';
import TechnologyBar from "../technologyBar/TechnologyBar";
import FlexWrapper from "../flexwrapper/FlexWrapper";

export const TechnologyRate = () => {
    return (
        <FlexWrapper direction={'column'}>
            <TechnologyBar technology={'Adobe Photoshop'} percentage={100}/>
            <TechnologyBar technology={'Adobe Photoshop'} percentage={75}/>
            <TechnologyBar technology={'Adobe Photoshop'} percentage={50}/>
            <TechnologyBar technology={'Adobe Photoshop'} percentage={25}/>

        </FlexWrapper>
    );
};

export default TechnologyRate;