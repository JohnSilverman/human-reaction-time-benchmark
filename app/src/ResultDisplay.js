import { useState } from "react";
import { Badge } from "reactstrap";

const ResultDisplay = () => {
    const [records,_] = useState(JSON.parse(window.sessionStorage.getItem("records")));

    const getAverage = () => records.reduce((x,y)=>(x+y)) / records.length;

    return (
        <div>
            <Badge color="transparent" className='badge'>{getAverage()} milliseconds</Badge>
        </div>
    );
};

export default ResultDisplay;