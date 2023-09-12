import React, { useEffect, useState } from "react";
import { CountryData } from './CountryData.js'

const County = () => {
    const [myData, setMyData] = useState(CountryData)
    const [selectData, setSelectData] = useState("")
    const [tra, setTra] = useState(["Afeganistão","افغانستان","etc.."])
    // console.log(myData)

    const selectFun = (e) => {
        setSelectData(e.target.value)
        console.log("eeee" + e.target.value)
    }

    useEffect(() => {
        
        let dummyArray = [];
        myData.map((val) => {
            if(selectData.includes(val.id)){
                for (let key in val.translations) {
                    dummyArray.push(val.translations[key])
                    // console.log(val.translations[key])
                }
                setTra(dummyArray)
            }
            // console.log(val.translations)
           
        })
        console.log("trarra", tra)

    }, [selectData])

    return (
        <div>
            <select onChange={selectFun}>
                {
                    myData.map((opt) => {
                        const { id, name, region } = opt
                        return <option key={id}>
                            {` ${id}.  
                         ${name}
                         
                        ${region}`}
                        </option>
                    })
                }
            </select>

            <select>
                {
                    tra.map((value) => {
                        return <option>
                            {value}
                        </option>
                    })
                }
            </select>

            <p>you have selected :- {selectData}</p>
        </div>
    );
}
export default County