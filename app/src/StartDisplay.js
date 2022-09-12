import { Button , Badge} from 'reactstrap';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './startdisplay.css';
import TestDisplay from './TestDisplay';
import ResultDisplay from './ResultDisplay';

const StartDisplay = () =>{

    const [btnDisplay, setBtnDisplay] = useState(true);
    const [testDisplay, setTestDisplay] = useState(false);
    const [resultDisplay, setResultDisplay] = useState(false);

    const btnOnClick = ()=>{
        setBtnDisplay(false);
        setTestDisplay(true);
    };

    useEffect(()=>{

    }, [btnDisplay]);

    useEffect(()=>{
        if(!btnDisplay && !testDisplay) setResultDisplay(true);
    },[testDisplay]);

    useEffect(()=>{

    },[resultDisplay]);

    return (
        <div id='rrtwrapper' class="wrapper">
            {
                btnDisplay &&
                <div class="mycontainer">
                    <div>
                        <Badge color="transparent" className='badge'>Reaction Time Test</Badge>
                    </div>
                    <Button onClick={btnOnClick} className='button' size="lg" color="primary">
                        Start
                    </Button>
                </div>
            }
            { testDisplay && <TestDisplay setter={setTestDisplay}/> }
            { resultDisplay && <ResultDisplay/>}
        </div>
    );
};
  
export default StartDisplay;