import React from 'react';

class Footer extends React.Component {
  render() {
    return (
    <div className="w-96 h-28 px-28 py-6 bg-zinc-800 flex flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="justify-between items-center inline-flex">
        <div className="justify-start items-center gap-12 flex">
          <img className="w-48 h-16" src="https://via.placeholder.com/196x65" alt="Logo" />
        </div>
        <div className="w-52 text-white text-lg font-normal font-['CocoSharp Trial']">COLOMBO | SRILANKA</div>
      </div>
    </div>
    );
  }
}

export default Footer;
