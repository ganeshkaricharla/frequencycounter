import React from 'react';
//import NameCard from '../NameCard/Namecard';
import './Results.css'
import './../App/App'
const Results = ({inputString,number}) =>{
    //const text = inputString.toLowerCase();
    const textArr = inputString.split(" ");
    const obj = {};
    function giveFreq() {
    for (let i = 0; i <= textArr.length; i++) {
        obj[textArr[i]] = 0;
    }
    for (let i = 0; i <= textArr.length; i++) {
        obj[textArr[i]]++;
    }

    return obj;
    }
    const newObj = giveFreq();
    let keys = Object.entries(newObj).sort(([,a],[,b])=>b-a);
    keys = keys.slice(0,number);

    return (
    <div className="result-container">
        <table>
            <thead>
                    <tr>
                        <th className="table-head-words">Words</th>
                        <th className="table-head-count">Count</th>
                    </tr>
                    
            </thead>
            <tbody>
                {keys.map((ele) => (
                    <tr>
                        <th className="table-head-word">{ele[0]}</th>
                        <th className="table-head-word">{ele[1]}</th>
                   </tr>
                ))}
            </tbody>
        </table>

    </div>
    );

/*
    <th className="table-head-value">{newObj[ele]}</th>
    const getWordCountArray = wordCount.map((suggestedName) => {
        return <NameCard key ={suggestedName} suggestedName ={suggestedName}/>;
        
    });


    return (
        <div className="result-container">
           {getWordCountArray}
        </div>
    )*/
}


export default Results;