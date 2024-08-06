import React, { useEffect, useState } from 'react'
import styles from './Mynotes.module.css'
import dataJson from '../assets/data.json';
const MYNotes = () => {
    const [dumydata,setdumydata]=useState({});
    useEffect(()=>{
        setdumydata(dataJson)
    })
    function MynotesDumydata() {
        return (
          <>
            <div className="px-48 ">
              <h1 className={styles.title}>Welcome back Subham Das....</h1>
              <hr />
              <a href="/dfd">
                <button className="px-2 py-2 text-sm font-thin bg-sky-500 m-5 rounde">
                  CREATE NEW NOTES
                </button>
              </a>
              {
                dumydata.map((res)=>{
                    console.log(res)
                    return(
                        <>
                        
                        </>
                    )
                })
              }
              {/* <div class="font-[sans-serif] border divide-y rounded-lg">
                <div role="accordion">
                  <button
                    type="button"
                    class="w-full text-base text-left font-semibold p-5 text-blue-600 border-b flex items-center transition-all"
                  >
                    <span class="mr-4">
                      Are there any special discounts or promotions available
                      during the event.
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 fill-current ml-auto shrink-0 rotate-180"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>

                  <div class="py-4 px-6">
                    <p class="text-sm text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed auctor auctor arcu, at fermentum dui. Maecenas
                      vestibulum a turpis in lacinia. Proin aliquam turpis at
                      erat venenatis malesuada. Sed semper, justo vitae
                      consequat fermentum, felis diam posuere ante, sed
                      fermentum quam justo in dui. Nulla facilisi. Nulla aliquam
                      auctor purus, vitae dictum dolor sollicitudin vitae. Sed
                      bibendum purus in efficitur consequat. Fusce et tincidunt
                      arcu. Curabitur ac lacus lectus. Morbi congue facilisis
                      sapien, a semper orci facilisis in.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        );
    }
  return (
    <div>
 {<MynotesDumydata/>}
    </div>
  )
}

export default MYNotes