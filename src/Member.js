import React from 'react'
import { useState, useEffect } from "react"  //React Hook
import memcss from './Member.module.css'
import { Link } from 'react-router-dom'

export default function Member() {
  let [showHolostars, setShowHolostars] = useState(true)
  let [gen1List, setGen1List] = useState([])
  let [gen2List, setGen2List] = useState([])
  let [gen3List, setGen3List] = useState([])
  let [uproarList, setUproarList] = useState([])
  //1 GEN
  useEffect(() => {
    //1 : useEffect無第二個參數 : component每次render都會觸發
    //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
    //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
    //fetch to get api
    fetch(
      'https://kora-ai.github.io/Web-holostars-data-api/1gen.json'
    )

      .then(response => response.json())
      .then(data => setGen1List(data))

    console.log(gen1List)
  }, []) // []-->  Dependency Array

  //2 GEN
  useEffect(() => {
    fetch(
      'https://kora-ai.github.io/Web-holostars-data-api/2gen.json'
    )

      .then(response => response.json())
      .then(data => setGen2List(data))

    console.log(gen2List)
  }, [])

  //3 GEN
  useEffect(() => {
    fetch(
      'https://kora-ai.github.io/Web-holostars-data-api/3gen.json'
    )

      .then(response => response.json())
      .then(data => setGen3List(data))

    console.log(gen3List)
  }, [])

  //UPROAR
  useEffect(() => {
    fetch(
      'https://kora-ai.github.io/Web-holostars-data-api/uproar.json'
    )

      .then(response => response.json())
      .then(data => setUproarList(data))

    console.log(uproarList)
  }, [])


  return (
    <div className={memcss.app}>
      <div className={memcss.btndiv}>

        <button onClick={() => setShowHolostars(true)}>Holostars</button>
        <button onClick={() => setShowHolostars(false)}>Uproar!!</button>

      </div>
      <div className={memcss.datalist}>
        {showHolostars &&
          <div className={memcss.gen1Title}>
            1st Generation
          </div>
        }
        {showHolostars &&
          <div className={memcss.gen1div}>
            {
              showHolostars && gen1List.map((member) => (

                <div className={memcss.data} key={member.id}>
                  <Link to={'/detail/' + member.id}>
                    <img src={process.env.PUBLIC_URL + 'holostars/' + member.img} />
                    <br />
                    {member.jname}
                  </Link>
                </div>

              ))
            }
          </div>
        }

        {showHolostars &&
          <div className={memcss.gen2Title}>
            2nd Generation
          </div>
        }
        {showHolostars &&

          <div className={memcss.gen2div}>
            {
              showHolostars && gen2List.map((member) => (
                <div className={memcss.data} key={member.id}>
                  <Link to={'/detail/' + member.id}>
                    <img src={process.env.PUBLIC_URL + 'holostars/' + member.img} />
                    <br />
                    {member.jname}
                  </Link>
                </div>

              ))
            }
          </div>
        }

        {showHolostars &&
          <div className={memcss.gen3Title}>
            3rd Generation
          </div>
        }
        {showHolostars &&

          <div className={memcss.gen3div}>
            {
              showHolostars && gen3List.map((member) => (
                <div className={memcss.data} key={member.id}>
                  <Link to={'/detail/' + member.id}>
                    <img src={process.env.PUBLIC_URL + 'holostars/' + member.img} />
                    <br />
                    {member.jname}
                  </Link>
                </div>

              ))
            }
          </div>
        }

        {!showHolostars &&
          <div className={memcss.uproarTitle}>
            Uproar!!
          </div>
        }

        <div className={memcss.uproardiv}>
          {
            !showHolostars && uproarList.map((member) => (
              <div className={memcss.data} key={member.id}>
                <Link to={'/detail/' + member.id}>
                  <img src={process.env.PUBLIC_URL + 'holostars/' + member.img} />
                  <br />
                  {member.jname}
                </Link>
              </div>
            ))
          }
        </div>
      </div>

    </div>

  )
}
