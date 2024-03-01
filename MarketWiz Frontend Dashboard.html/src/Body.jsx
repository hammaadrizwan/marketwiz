// this will be used to design the body of the dashboard.

import React from 'react';

class Body extends React.Component {
    render() {
        return(
            <div className="w-96 h-96 pl-32 pr-28 pt-8 pb-16 bg-red-700 bg-opacity-30 flex-col justify-start items-center gap-14 inline-flex">
                <div className="h-16 pt-2.5 flex-col justify-start items-center gap-3 flex">
                    <div className="w-96 text-center text-white text-5xl font-extrabold font-['CocoSharp Trial'] leading-10">Good Afternoon, James</div>
                </div>
                <div className="w-96 h-96 justify-start items-start gap-5 inline-flex">
                    <div className="w-96 h-96 pt-2.5 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-96 h-28 relative">
                            <div className="w-96 h-28 left-0 top-0 absolute bg-gradient-to-r from-white to-yellow-300 rounded-3xl" />
                                <div className="pl-1 pt-2.5 left-[28.50px] top-[11px] absolute justify-end items-start gap-3 inline-flex">
                                    <div className="w-64 h-9"><span style="text-neutral-900 text-2xl font-bold font-['CocoSharp Trial'] capitalize">Rainfall predicted for today (</span><span style="text-neutral-900 text-2xl font-bold font-['CocoSharp Trial'] lowercase">mm</span><span style="text-neutral-900 text-2xl font-bold font-['CocoSharp Trial'] capitalize">) </span></div>
                                    <div className="w-32 h-16 text-black text-6xl font-bold font-['Product Sans'] capitalize">14.3</div>
                                </div>
                            </div>
                            <div className="w-96 h-96 pl-8 pt-4 pb-7 bg-neutral-800 rounded-3xl flex-col justify-start items-start gap-3.5 flex">
                                <div className="w-96 h-24 pl-1.5 pt-2 rounded-3xl flex-col justify-start items-start gap-7 flex">
                                    <div className="w-80 text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">Predict The Price of A Product (LKR)</div>
                                </div>
                                <div className="w-96 h-28 pl-px pr-1 rounded-3xl flex-col justify-center items-start flex">
                                    <div className="w-96 h-7 rounded-3xl justify-center items-center gap-24 inline-flex">
                                    <div className="w-36 h-5 text-zinc-400 text-xl font-bold font-['CocoSharp Trial'] capitalize">Todays Price</div>
                                    <div className="w-32 h-5 text-zinc-400 text-xl font-bold font-['CocoSharp Trial'] capitalize">No of Days</div>
                                </div>
                                <div className="w-96 h-20 rounded-3xl justify-center items-center gap-3.5 inline-flex">
                                    <div className="w-60 h-14 relative">
                                        <div className="w-60 h-14 left-0 top-[0.84px] absolute rounded-2xl shadow-inner border border-gray-200" />
                                        <div className="w-44 h-9 left-[94px] top-[9.28px] absolute"><span style="text-zinc-400 text-2xl font-bold font-['Poppins'] capitalize">120.00 </span><span style="text-zinc-400 text-2xl font-medium font-['Poppins'] capitalize">lKR</span></div>
                                    </div>
                                    <div className="w-32 h-14 relative">
                                        <div className="w-32 h-14 left-0 top-0 absolute rounded-xl border border-white" />
                                            <div className="w-8 h-6 left-[11.04px] top-[13.68px] absolute text-zinc-400 text-2xl font-bold font-['CocoSharp Trial'] capitalize">-</div>
                                            <div className="w-8 h-6 left-[96.89px] top-[14.53px] absolute text-zinc-400 text-2xl font-bold font-['CocoSharp Trial'] capitalize">+</div>
                                            <div className="w-8 h-6 left-[53.96px] top-[13.68px] absolute text-zinc-400 text-2xl font-bold font-['Poppins'] capitalize">3</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-96 h-16 rounded-3xl justify-start items-end gap-11 inline-flex">
                                    <div className="w-36 h-16 relative">
                                        <div className="w-36 h-16 left-[0.38px] top-0 absolute bg-neutral-50 rounded-2xl" />
                                            <div className="w-24 h-7 left-[26.50px] top-[13.52px] absolute text-black text-2xl font-bold font-['Poppins'] capitalize">Predict</div>
                                        </div>
                                        <div className="w-48 h-16 text-white text-6xl font-bold font-['Poppins'] capitalize">124.34</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-96 h-96 pt-2.5 justify-center items-start gap-6 flex">
                                <div className="w-96 h-96 bg-gradient-to-b from-yellow-200 to-emerald-200 rounded-3xl shadow flex-col justify-center items-center inline-flex">
                                    <div className="w-96 h-16 flex-col justify-center items-start gap-2.5 flex">
                                        <div className="w-80 h-16 text-black text-2xl font-bold font-['CocoSharp Trial'] capitalize">Best Sellers predicted for today</div>
                                    </div>
                                    <div className="w-96 h-96 py-6 rounded-3xl flex-col justify-start items-start gap-4 flex">
                                        <div className="w-96 h-28 relative">
                                            <div className="w-96 h-28 left-0 top-0 absolute bg-neutral-50 rounded-3xl" />
                                                <div className="w-64 h-16 left-[18.86px] top-[21.20px] absolute"><span style="text-neutral-900 text-2xl font-bold font-['CocoSharp Trial'] capitalize">Ambewella Youghurt </span><span style="text-neutral-900 text-2xl font-bold font-['Product Sans'] capitalize">80 ML<br/></span></div>
                                                <div className="left-[328.14px] top-[16.74px] absolute text-black text-6xl font-bold font-['Product Sans'] capitalize">20</div>
                                            </div>
                                            <div className="w-96 h-24 relative">
                                                <div className="w-96 h-24 left-0 top-0 absolute bg-neutral-50 rounded-3xl" />
                                                    <div className="w-56 h-16 left-[21.44px] top-[18.95px] absolute"><span style="text-neutral-900 text-2xl font-bold font-['CocoSharp Trial'] capitalize">Prima Wheat Flour </span><span style="text-neutral-900 text-2xl font-bold font-['Product Sans'] capitalize">1 KG<br/></span></div>
                                                    <div className="left-[330.03px] top-[24.21px] absolute text-black text-6xl font-bold font-['Product Sans'] capitalize">18</div>
                                                </div>
                                                <div className="w-96 h-24 relative">
                                                <div className="w-96 h-24 left-0 top-0 absolute bg-neutral-50 rounded-3xl" />
                                                    <div className="w-60 h-16 left-[21.49px] top-[22.33px] absolute"><span style="text-neutral-900 text-2xl font-bold font-['CocoSharp Trial'] capitalize">Harischandra coffee </span><span style="text-neutral-900 text-2xl font-bold font-['Product Sans'] capitalize">250G</span></div>
                                                    <div className="left-[347.65px] top-[13.82px] absolute text-black text-6xl font-bold font-['Product Sans'] capitalize">7</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-96 h-96 bg-slate-600 bg-opacity-0 flex-col justify-center items-center flex">
                                    <div className="w-96 h-12 flex-col justify-start items-start gap-2.5 flex">
                                        <div className="w-96 h-11 text-white text-2xl font-extrabold font-['CocoSharp Trial'] capitalize">Predicted Units sold for today</div>
                                    </div>
                                    <div className="w-96 h-96 relative">
                                        <div className="w-96 h-96 left-[9.92px] top-0 absolute bg-neutral-700 rounded-3xl" />
                                        <div className="w-96 h-8 left-[75.36px] top-[117.94px] absolute"><span style="text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">Ambewella Yoghurt </span><span style="text-white text-2xl font-bold font-['Product Sans'] capitalize">80 ML<br/></span></div>
                                        <div className="w-96 h-8 left-[75.36px] top-[178.39px] absolute"><span style="text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">Highland Set Yoghurt </span><span style="text-white text-2xl font-bold font-['Product Sans'] capitalize">80 ML<br/></span></div>
                                        <div className="w-96 h-8 left-[75.36px] top-[242.81px] absolute"><span style="text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">Prima Wheat Flour </span><span style="text-white text-2xl font-bold font-['Product Sans'] capitalize">1KG<br/></span></div>
                                        <div className="w-96 h-8 left-[75.36px] top-[306.23px] absolute"><span style="text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">Harishchandra coffee </span><span style="text-white text-2xl font-bold font-['Product Sans'] capitalize">250 G<br/></span></div>
                                        <div className="w-96 h-8 left-[75.36px] top-[367.68px] absolute"><span style="text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">Elephant House Vanilla Ice cream </span><span style="text-white text-2xl font-bold font-['Product Sans'] capitalize">1</span><span style="text-white text-2xl font-bold font-['CocoSharp Trial'] capitalize">L</span></div>
                                        <div className="w-12 h-8 left-[703.01px] top-[110.01px] absolute text-center text-white text-3xl font-bold font-['Product Sans'] capitalize">20</div>
                                        <div className="w-12 h-8 left-[704px] top-[176.41px] absolute text-center text-white text-3xl font-bold font-['Product Sans'] capitalize">11</div>
                                        <div className="w-12 h-8 left-[704px] top-[239.83px] absolute text-center text-white text-3xl font-bold font-['Product Sans'] capitalize">14</div>
                                        <div className="w-12 h-8 left-[703.01px] top-[298.31px] absolute text-center text-white text-3xl font-bold font-['Product Sans'] capitalize">8</div>
                                        <div className="w-12 h-8 left-[703.01px] top-[368.67px] absolute text-center text-white text-3xl font-bold font-['Product Sans'] capitalize">5</div>
                                        <div className="w-96 h-20 left-[9.92px] top-0 absolute">
                                            <div className="w-96 h-20 left-0 top-0 absolute bg-amber-200 rounded-3xl" />
                                                <div className="w-96 h-9 left-0 top-[37.08px] absolute bg-amber-200" />
                                                </div>
                                                <div className="w-80 h-7 left-0 top-[25.77px] absolute text-center text-black text-3xl font-bold font-['CocoSharp Trial'] capitalize">Product name</div>
                                                <div className="w-60 h-7 left-[603.86px] top-[26.76px] absolute text-center text-black text-3xl font-bold font-['CocoSharp Trial'] capitalize">Units sold</div>
                                            </div>
                                            <div className="w-96 h-12 flex-col justify-end items-center gap-2.5 flex">
                                                <div className="w-52 h-11 text-white text-lg font-extrabold font-['CocoSharp Trial'] underline capitalize">Download Results now</div>
                                            </div>
                                        </div>
                                    </div>
        )
    }
}

export default Body;