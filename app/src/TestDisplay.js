import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import './testdisplay.css';

const TEST_COUNT = 10;
const TEST_MIN_INTERVAL_MILLISECONDS = 500;
const TEST_MAX_INTERVAL_MILLISECONDS = 1500;

const TestDisplay = (props) => {
    const wrapper = document.getElementById("rrtwrapper");
    const [timestamp, setTimestamp] = useState();
    const [records, setRecords] = useState([]);

    const recordReactionRate = () => {
        let newRecords = records.slice();
        newRecords.push(Date.now()- timestamp);
        setRecords(newRecords);
    };

    const btnOnClick = () => {
        if(wrapper.style.backgroundColor == "red"){
            recordReactionRate();
        }
    };

    const turnRed = () => {
        setTimestamp(Date.now());
        wrapper.style.backgroundColor = "red";
    };

    const turnBlue = () => {
        wrapper.style.backgroundColor = "#007bff";
        setTimeout(()=>{
            turnRed();
        }, Math.random()*(TEST_MAX_INTERVAL_MILLISECONDS-TEST_MIN_INTERVAL_MILLISECONDS)+TEST_MIN_INTERVAL_MILLISECONDS);

    };

    useEffect(()=>{
        if(records.length == TEST_COUNT){
            window.sessionStorage.setItem("records", JSON.stringify(records));
            wrapper.style.backgroundColor = "#007bff";
            props.setter(false);
        } else turnBlue();
    },[records]);

    return (
        <div>
            <Button onClick={btnOnClick} color="danger" className="mybutton">Click this when the background turns RED</Button>
        </div>
    );
};

export default TestDisplay;