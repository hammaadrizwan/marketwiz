// Navbar Component
import React from 'react';

class NavBar extends React.Component{
  return() {
    render(
      <div className="w-[1200px] h-28 px-[120px] bg-zinc-800 justify-between items-center inline-flex">
  <div className="w-[159px] h-10 relative">
    <div className="w-10 h-10 left-0 top-0 absolute">
    </div>
    <img className="w-[173px] h-[100px] left-[-16px] top-[-26px] absolute" src="https://via.placeholder.com/173x100" />
  </div>
  <div className="justify-start items-center gap-4 flex">
    <div className="justify-start items-start flex">
      <div className="w-[104px] px-[26px] py-2.5 justify-center items-center gap-2.5 flex">
        <div className="text-neutral-200 text-lg font-normal font-['CocoSharp Trial']">Home</div>
      </div>
      <div className="w-[92px] px-[26px] py-2.5 justify-center items-center gap-2.5 flex">
        <div className="text-neutral-200 text-lg font-normal font-['CocoSharp Trial']">Help</div>
      </div>
    </div>
    <div className="px-6 py-3.5 bg-gradient-to-br from-amber-200 to-green-400 rounded-xl justify-start items-center gap-2 flex">
      <div className="text-neutral-950 text-[19px] font-bold font-['CocoSharp Trial']">My Account</div>
    </div>
  </div>
</div>
    )
      
  }
}
  
export default NavBar;
