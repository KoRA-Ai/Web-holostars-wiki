import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import detailcss from './Detail.module.css'
export default function Detail() {
  let [memberList, setMemberList] = useState(null)

  let params = useParams()

  useEffect(() => {
    fetch('https://kora-ai.github.io/Web-holostars-data-api/members.json'
    )
      .then(response => response.json())
      .then(data => {
        let starInfo = data.find((element) => {
          return element.id === parseInt(params.id)
        })
        setMemberList(starInfo)
      })
  }, [params.id])

  return (
    <div className={detailcss.app}>

      {
        memberList &&
        <div className={detailcss.data}>
          <div className={detailcss.nameTitle}>
            {memberList.jname}
          </div>

          <table className={detailcss.table}>
            <tbody>
              <tr >
                <td colSpan={2} className={detailcss.tabledata}  >
                  <img src={process.env.PUBLIC_URL + '/holostars/' + memberList.img} />

                </td>
              </tr>
              <tr>
                <td className={detailcss.tabledata}>Japanese Name</td>
                <td className={detailcss.tabledata}>
                  {memberList.jname}
                </td>
              </tr>
              <tr>
                <td className={detailcss.tabledata}>English Name</td>
                <td className={detailcss.tabledata}>
                  {memberList.ename}
                </td>
              </tr>
              <tr>
                <td className={detailcss.tabledata}>Birthday</td>
                <td className={detailcss.tabledata}>
                  {memberList.birthday}
                </td>
              </tr>
              <tr>
                <td className={detailcss.tabledata}>Debut Date</td>
                <td className={detailcss.tabledata}>
                  {memberList.debutdate}

                </td>
              </tr>
              <tr>
                <td className={detailcss.tabledata}>Youtube Channel</td>
                <td className={detailcss.tabledata}>
                  <a href={memberList.youtube}>{memberList.jname} Official</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={detailcss.backBtndiv}>
            <Link to="/" className={detailcss.backBtntext}>
              <button className={detailcss.backBtn}>
                Back
              </button></Link>
          </div>



        </div>
      }

    </div>
  )
}
