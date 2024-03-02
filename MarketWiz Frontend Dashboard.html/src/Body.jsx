// This will be used to design the body of the dashboard.

import React from 'react';

class Body extends React.Component {
    render() {
        return (
          <div className="w-[1200px] h-[1333px] pl-[122px] pr-[120px] pt-[34px] pb-[62px] bg-red-700 bg-opacity-30 flex-col justify-start items-center gap-[55px] inline-flex">
          <div className="h-[68px] pt-2.5 flex-col justify-start items-center gap-3 flex">
            <div className="w-[668px] text-center text-white text-[45px] font-extrabold font-['CocoSharp Trial'] leading-[58.50px]">Good Afternoon, James</div>
          </div>
          <div className="w-[959px] h-[513px] justify-start items-start gap-[22px] inline-flex">
            <div className="w-[448px] h-[513px] pt-2.5 flex-col justify-start items-start gap-[25px] inline-flex">
              <div className="w-[448px] h-[111px] relative">
                <div className="w-[448px] h-[111px] left-0 top-0 absolute bg-gradient-to-r from-white to-yellow-300 rounded-[37px]" />
                <div className="w-[393px] h-[73px] left-[28.50px] top-[11px] absolute">
                  <div className="w-[123px] h-[62px] left-[271px] top-[11px] absolute text-black text-6xl font-bold font-['Product Sans'] capitalize">14.3</div>
                  <div className="w-[253.77px] h-[36.18px] left-[4.94px] top-[11.43px] absolute"><span style="text-neutral-900 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Rainfall predicted for today (</span><span style="text-neutral-900 text-[25px] font-bold font-['CocoSharp Trial'] lowercase">mm</span><span style="text-neutral-900 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">) </span></div>
                </div>
              </div>
              <div className="w-[449px] h-[367px] pl-8 pt-[18px] pb-[29px] bg-neutral-800 rounded-[50px] flex-col justify-start items-start gap-3.5 flex">
                <div className="w-[429px] h-[102px] pl-1.5 pt-[9px] rounded-[50px] flex-col justify-start items-start gap-[29px] flex">
                  <div className="w-[321px] text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Predict The Price of A Product (LKR)</div>
                </div>
                <div className="w-[398px] h-[114px] pl-px pr-1 rounded-[50px] flex-col justify-center items-start flex">
                  <div className="w-[386px] h-7 rounded-[50px] justify-center items-center gap-[101px] inline-flex">
                    <div className="w-[149px] h-[22px] text-zinc-400 text-xl font-bold font-['CocoSharp Trial'] capitalize">Todays Price</div>
                    <div className="w-[124px] h-5 text-zinc-400 text-xl font-bold font-['CocoSharp Trial'] capitalize">No of Days</div>
                  </div>
                  <div className="w-[386px] h-[74px] rounded-[50px] justify-center items-center gap-[15px] inline-flex">
                    <div className="w-60 h-[54px] relative">
                      <div className="w-60 h-[53.16px] left-0 top-[0.84px] absolute rounded-[15px] shadow-inner border border-gray-200" />
                      <div className="w-[183.26px] h-[36.28px] left-[94px] top-[9.28px] absolute"><span style="text-zinc-400 text-[25px] font-bold font-['Poppins'] capitalize">120.00 </span><span style="text-zinc-400 text-[25px] font-medium font-['Poppins'] capitalize">lKR</span></div>
                    </div>
                    <div className="w-[130px] h-[53px] relative">
                      <div className="w-[126.32px] h-[53px] left-0 top-0 absolute rounded-xl border border-white" />
                      <div className="w-[31.89px] h-[23.94px] left-[11.04px] top-[13.68px] absolute text-zinc-400 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">-</div>
                      <div className="w-[31.89px] h-[23.94px] left-[96.89px] top-[14.53px] absolute text-zinc-400 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">+</div>
                      <div className="w-[31.89px] h-[23.94px] left-[53.96px] top-[13.68px] absolute text-zinc-400 text-[25px] font-bold font-['Poppins'] capitalize">3</div>
                    </div>
                  </div>
                </div>
                <div className="w-[383px] h-16 rounded-[50px] justify-start items-end gap-[43px] inline-flex">
                  <div className="w-36 h-16 relative">
                    <div className="w-[142.48px] h-16 left-[0.38px] top-0 absolute bg-neutral-50 rounded-[15px]" />
                    <div className="w-[99px] h-[27.04px] left-[26.50px] top-[13.52px] absolute text-black text-[25px] font-bold font-['Poppins'] capitalize">Predict</div>
                  </div>
                  <div className="w-[196px] h-16 text-white text-6xl font-bold font-['Poppins'] capitalize">124.34</div>
                </div>
              </div>
            </div>
            <div className="w-[489px] h-[513px] pt-2.5 justify-center items-start gap-[23px] flex">
              <div className="w-[478px] h-[503px] bg-gradient-to-b from-yellow-200 to-emerald-200 rounded-[43px] shadow flex-col justify-center items-center inline-flex">
                <div className="w-[395px] h-[68px] flex-col justify-center items-start gap-2.5 flex">
                  <div className="w-[339px] h-[68px] text-black text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Best Sellers predicted for today</div>
                </div>
                <div className="w-[414px] h-[381px] pt-6 pb-[23px] rounded-[43px] flex-col justify-start items-start gap-4 flex">
                  <div className="w-[413px] h-[106px] relative">
                    <div className="w-[413px] h-[106px] left-0 top-0 absolute bg-neutral-50 rounded-[22px]" />
                    <div className="w-[259.30px] h-[66.95px] left-[18.86px] top-[21.20px] absolute"><span style="text-neutral-900 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Ambewella Youghurt </span><span style="text-neutral-900 text-[25px] font-bold font-['Product Sans'] capitalize">80 ML<br/></span></div>
                    <div className="left-[328.14px] top-[16.74px] absolute text-black text-[56px] font-bold font-['Product Sans'] capitalize">20</div>
                  </div>
                  <div className="w-[413px] h-[100px] relative">
                    <div className="w-[413px] h-[100px] left-0 top-0 absolute bg-neutral-50 rounded-[22px]" />
                    <div className="w-[216.29px] h-[63.16px] left-[21.44px] top-[18.95px] absolute"><span style="text-neutral-900 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Prima Wheat Flour </span><span style="text-neutral-900 text-[25px] font-bold font-['Product Sans'] capitalize">1 KG<br/></span></div>
                    <div className="left-[330.03px] top-[24.21px] absolute text-black text-[56px] font-bold font-['Product Sans'] capitalize">18</div>
                  </div>
                  <div className="w-[414px] h-[101px] relative">
                    <div className="w-[414px] h-[101px] left-0 top-0 absolute bg-neutral-50 rounded-[22px]" />
                    <div className="w-[244.85px] h-[63.79px] left-[21.49px] top-[22.33px] absolute"><span style="text-neutral-900 text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Harischandra coffee </span><span style="text-neutral-900 text-[25px] font-bold font-['Product Sans'] capitalize">250G</span></div>
                    <div className="left-[347.65px] top-[13.82px] absolute text-black text-[56px] font-bold font-['Product Sans'] capitalize">7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[951px] h-[539px] bg-slate-600 bg-opacity-0 flex-col justify-center items-center flex">
            <div className="w-[914px] h-[50px] flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[596px] h-11 text-white text-[25px] font-extrabold font-['CocoSharp Trial'] capitalize">Predicted Units sold for today</div>
            </div>
            <div className="w-[939px] h-[443px] relative">
              <div className="w-[929.08px] h-[443px] left-[9.92px] top-0 absolute bg-neutral-700 rounded-[53px]" />
              <div className="w-[356.96px] h-[30.72px] left-[75.36px] top-[117.94px] absolute"><span style="text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Ambewella Yoghurt </span><span style="text-white text-[25px] font-bold font-['Product Sans'] capitalize">80 ML<br/></span></div>
              <div className="w-[356.96px] h-[30.72px] left-[75.36px] top-[178.39px] absolute"><span style="text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Highland Set Yoghurt </span><span style="text-white text-[25px] font-bold font-['Product Sans'] capitalize">80 ML<br/></span></div>
              <div className="w-[356.96px] h-[30.72px] left-[75.36px] top-[242.81px] absolute"><span style="text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Prima Wheat Flour </span><span style="text-white text-[25px] font-bold font-['Product Sans'] capitalize">1KG<br/></span></div>
              <div className="w-[356.96px] h-[30.72px] left-[75.36px] top-[306.23px] absolute"><span style="text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Harishchandra coffee </span><span style="text-white text-[25px] font-bold font-['Product Sans'] capitalize">250 G<br/></span></div>
              <div className="w-[464.05px] h-[30.72px] left-[75.36px] top-[367.68px] absolute"><span style="text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">Elephant House Vanilla Ice cream </span><span style="text-white text-[25px] font-bold font-['Product Sans'] capitalize">1</span><span style="text-white text-[25px] font-bold font-['CocoSharp Trial'] capitalize">L</span></div>
              <div className="w-[49.58px] h-[33.70px] left-[703.01px] top-[110.01px] absolute text-center text-white text-[29px] font-bold font-['Product Sans'] capitalize">20</div>
              <div className="w-[49.58px] h-[33.70px] left-[704px] top-[176.41px] absolute text-center text-white text-[29px] font-bold font-['Product Sans'] capitalize">11</div>
              <div className="w-[49.58px] h-[33.70px] left-[704px] top-[239.83px] absolute text-center text-white text-[29px] font-bold font-['Product Sans'] capitalize">14</div>
              <div className="w-[49.58px] h-[33.70px] left-[703.01px] top-[298.31px] absolute text-center text-white text-[29px] font-bold font-['Product Sans'] capitalize">8</div>
              <div className="w-[49.58px] h-[33.70px] left-[703.01px] top-[368.67px] absolute text-center text-white text-[29px] font-bold font-['Product Sans'] capitalize">5</div>
              <div className="w-[929.08px] h-[72.35px] left-[9.92px] top-0 absolute">
                <div className="w-[929.08px] h-[72.35px] left-0 top-0 absolute bg-amber-200 rounded-[71px]" />
                <div className="w-[929.08px] h-[35.27px] left-0 top-[37.08px] absolute bg-amber-200" />
              </div>
              <div className="w-[338.12px] h-[26.76px] left-0 top-[25.77px] absolute text-center text-black text-[29px] font-bold font-['CocoSharp Trial'] capitalize">Product name</div>
              <div className="w-[247.89px] h-[26.76px] left-[603.86px] top-[26.76px] absolute text-center text-black text-[29px] font-bold font-['CocoSharp Trial'] capitalize">Units sold</div>
            </div>
            <div className="w-[886px] h-[50px] flex-col justify-end items-center gap-2.5 flex">
              <div className="w-[210px] h-11 text-white text-lg font-extrabold font-['CocoSharp Trial'] underline capitalize">Download Results now</div>
            </div>
          </div>
        </div>
        );
    }
}

export default Body;
