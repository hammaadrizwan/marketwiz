import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
    <div className="w-96 h-28 px-28 bg-zinc-800 justify-between items-center inline-flex">
      <div className="w-40 h-10 relative">
        <img className="w-44 h-24 left-[-16px] top-[-26px] absolute" src="https://via.placeholder.com/173x100" alt="Logo" />
      </div>
      <div className="justify-start items-center gap-4 flex">
        <div className="justify-start items-start flex">
          <div className="w-24 px-6 py-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-neutral-200 text-lg font-normal font-['CocoSharp Trial']">Home</div>
          </div>
          <div className="w-24 px-6 py-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-neutral-200 text-lg font-normal font-['CocoSharp Trial']">Help</div>
          </div>
        </div>
        <div className="px-6 py-3.5 bg-gradient-to-br from-amber-200 to-green-400 rounded-xl justify-start items-center gap-2 flex">
          <div className="text-neutral-950 text-lg font-bold font-['CocoSharp Trial']">My Account</div>
        </div>
      </div>
    </div>
    );
  }
}

export default Navbar;
