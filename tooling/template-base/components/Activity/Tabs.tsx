import React from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 flex-row font-primary" role="tablist">
            <li
              className={
                'w-[120px] text-center text-sm font-semibold py-4 ' +
                (openTab === 1 ? 'border-b-2 border-blue-400' : '')
              }
            >
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3' +
                  (openTab === 1 ? 'text-blue-400 text-center' : 'bg-white')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                My Learning
              </a>
            </li>
            <li
              className={
                'w-[120px] text-center text-sm font-semibold py-4 ' +
                (openTab === 2 ? 'border-b-2 border-blue-400' : '')
              }
            >
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3' +
                  (openTab === 2 ? 'text-blue-400 text-center' : 'bg-white')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Events
              </a>
            </li>
            <li
              className={
                'w-[120px] text-center text-sm font-semibold py-4 ' +
                (openTab === 3 ? 'border-b-2 border-blue-400' : '')
              }
            >
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3' +
                  (openTab === 3 ? 'text-blue-400 text-center' : 'bg-white')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Completed
              </a>
            </li>
          </ul>
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Tab 1
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Tab 2
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Tab 3
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Tabs;
