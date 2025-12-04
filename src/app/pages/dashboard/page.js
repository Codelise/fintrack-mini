export default function dashboardPage () {

  return (

    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#382935] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">FinTrack</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Transactions</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Reports</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Settings</a>
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#382935] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARjrwJLz0jsQ7kY2M3YY60k2MTf1J2y50HMSAaIlZj2hWisAEeivdz9KmDNumRowmzOqHLE8wrmgjsIIJWH80d4tvANfXOtqs5d7X8-74osH__IzaAzvh6c8sOIOtmZQJLkceAs6juui7kjmhPOe-7m_x0WnUorMuCY0bxbtRUtueBAc1FRnZLpw9q_2fVkMKTdCztGTQQj-Woxsm8sIUr1H43bTJaLO_DXpfciIyfhB41pmLC0xs1UoDIOMZ3ZP3xIe_uPUsONuKt")'}} 
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                <p className="text-[#b79eb2] text-sm font-normal leading-normal">Overview of your financial health</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#382935]">
                <p className="text-white text-base font-medium leading-normal">Total Income</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">$5,500</p>
                <p className="text-[#0bda84] text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#382935]">
                <p className="text-white text-base font-medium leading-normal">Total Expenses</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">$3,200</p>
                <p className="text-[#fa7538] text-base font-medium leading-normal">-5%</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#523d4d] p-6">
                <p className="text-white text-base font-medium leading-normal">Spending Over Time</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$3,200</p>
                <div className="flex gap-1">
                  <p className="text-[#b79eb2] text-base font-normal leading-normal">Last 6 Months</p>
                  <p className="text-[#fa7538] text-base font-medium leading-normal">-5%</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#b79eb2"
                      strokeWidth="3"
                      strokelinecup="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#382935"></stop>
                        <stop offset="1" stopColor="#382935" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                  </div>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#523d4d] p-6">
                <p className="text-white text-base font-medium leading-normal">Spending by Category</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$3,200</p>
                <div className="flex gap-1">
                  <p className="text-[#b79eb2] text-base font-normal leading-normal">This Month</p>
                  <p className="text-[#fa7538] text-base font-medium leading-normal">-10%</p>
                </div>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" > </div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Food</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Rent</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Utilities</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Entertainment</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Transport</p>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Transactions</h2>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#b79eb2] flex border-none bg-[#382935] items-center justify-center pl-4 rounded-l-lg border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search transactions"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#382935] focus:border-none h-full placeholder:text-[#b79eb2] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    // value=""
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382935] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">All</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382935] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Income</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382935] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Expenses</p>
              </div>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#523d4d] bg-[#171116]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#261c24]">
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Date</th>
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Category</th>
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Description</th>
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-15
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">Food</td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Grocery shopping
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$150</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-14
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">Income</td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Salary deposit
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">+$3,000</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-13
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">Rent</td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Monthly rent payment
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$1,500</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-12
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Utilities
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Electricity bill
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$200</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-11
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Entertainment
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Movie tickets
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
 



  )
}