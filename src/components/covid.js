import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

  const [data, setData] = useState([])

  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const dataset = await res.json()
      setData(dataset.statewise[0]);
      console.log(dataset.statewise[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCovidData();
  }, [])

  return (
    <>
      <section>
        <div className='navbar'>
          <h1 className='text-center'><span style={{ fontSize: "0.8rem" }}>🔴</span> LIVE COVID TRACKER</h1>
          {/* <h2 className='text-center'>COVID TRACKER </h2> */}
        </div>

        <div id='main'>
          <ul>
            <li className='card text-center'>
              <div className='card-main bg-color-1'>
                <div className='card-inner'>
                  <p className='card-title'><span>OUR</span> COUNTRY</p>
                  <p className='card-value'>INDIA</p>
                </div>
              </div>
            </li>
            <li className='card text-center'>
              <div className='card-main bg-color-2'>
                <div className='card-inner'>
                  <p className='card-title'><span>TOTAL</span> CONFIRMED</p>
                  <p className='card-value'>{data.confirmed}</p>
                  {/* <p className='card-value'>123456789</p> */}
                </div>
              </div>
            </li>
            <li className='card text-center'>
              <div className='card-main bg-color-3'>
                <div className='card-inner'>
                  <p className='card-title'><span>TOTAL</span> ACTIVE</p>
                  <p className='card-value'>{data.active}</p>
                  {/* <p className='card-value'>123456789</p> */}
                </div>
              </div>
            </li>
            <li className='card text-center'>
              <div className='card-main bg-color-4'>
                <div className='card-inner'>
                  <p className='card-title'><span>TOTAL</span> RECOVERED</p>
                  <p className='card-value'>{data.recovered}</p>
                  {/* <p className='card-value'>123456789</p> */}
                </div>
              </div>
            </li>
            <li className='card text-center'>
              <div className='card-main bg-color-5'>
                <div className='card-inner'>
                  <p className='card-title'><span>TOTAL</span> DEATHS</p>
                  <p className='card-value'>{data.deaths}</p>
                  {/* <p className='card-value'>123456789</p> */}
                </div>
              </div>
            </li>
            <li className='card text-center'>
              <div className='card-main bg-color-6'>
                <div className='card-inner'>
                  <p className='card-title'><span>LAST</span> UPDATED</p>
                  {/* <p className='card-value' style={{ margin: "13% 0 0 0" }}>13/06/2021 08:21:26</p> */}
                  <p className='card-value' style={{margin:"13% 0 0 0"}}>{data.lastupdatedtime}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
    // <>
    //   <section>
    //     <div className='navbar'>
    //       <h1 className='text-center'><span style={{ fontSize: "0.8rem" }}>🔴</span> LIVE COVID TRACKER</h1>
    //       {/* <h2 className='text-center'>COVID TRACKER </h2> */}
    //     </div>

    //     <div id='main'>
    //       <ul>
    //         <li className='card text-center'>
    //           <div className='card-main bg-color-1'>
    //             <div className='card-inner'>
    //               <p className='card-title'><span>OUR</span> COUNTRY</p>
    //               <p className='card-value'>INDIA</p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='card text-center'>
    //           <div className='card-main bg-color-2'>
    //             <div className='card-inner'>
    //               <p className='card-title'><span>TOTAL</span> CONFIRMED</p>
    //               {/* <p className='card-value'>{data.confirmed}</p> */}
    //               <p className='card-value'>123456789</p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='card text-center'>
    //           <div className='card-main bg-color-3'>
    //             <div className='card-inner'>
    //               <p className='card-title'><span>TOTAL</span> ACTIVE</p>
    //               {/* <p className='card-value'>{data.active}</p> */}
    //               <p className='card-value'>123456789</p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='card text-center'>
    //           <div className='card-main bg-color-4'>
    //             <div className='card-inner'>
    //               <p className='card-title'><span>TOTAL</span> RECOVERED</p>
    //               {/* <p className='card-value'>{data.recovered}</p> */}
    //               <p className='card-value'>123456789</p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='card text-center'>
    //           <div className='card-main bg-color-5'>
    //             <div className='card-inner'>
    //               <p className='card-title'><span>TOTAL</span> DEATHS</p>
    //               {/* <p className='card-value'>{data.deaths}</p> */}
    //               <p className='card-value'>123456789</p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className='card text-center'>
    //           <div className='card-main bg-color-6'>
    //             <div className='card-inner'>
    //               <p className='card-title'><span>LAST</span> UPDATED</p>
    //               <p className='card-value' style={{ margin: "13% 0 0 0" }}>13/06/2021 08:21:26</p>
    //               {/* <p className='card-value' style={{margin:"13% 0 0 0"}}>{data.lastupdatedtime}</p> */}
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </section>
    // </>
  )
}

export default Covid

// active: "1021220"
// confirmed: "29439038"
// deaths: "370407"
// deltaconfirmed: "0"
// deltadeaths: "0"
// deltarecovered: "0"
// lastupdatedtime: "13/06/2021 08:21:26"
// migratedother: "11525"
// recovered: "28035886"
// state: "Total"
// statecode: "TT"
// statenotes: ""