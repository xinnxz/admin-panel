import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa'
import PieComponent from './PieComponent';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const Main = () => {
    return (
        <div className='pt-[10px] px-[25px] bg-[#f8f9fc]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
                <button className='bg-[#2e59d9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate</button>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[10px] pb-[15px]'>
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#b589df] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>RP 7.000.000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color='' />
                </div>
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#74d198] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#74d198] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>RP 7.000.000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color='' />
                </div>
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4eaadf] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#81b1dd] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>RP 7.000.000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color='' />
                </div>
                <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#df538d] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#da8692] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>RP 7.000.000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color='' />
                </div>
            </div>

            <div className='flex mt-[22px] w-full gap-[30px] '>
                <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed] mb-[20px]'>
                        <h2>Earning Overview</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer'/>
                    </div>
                    <div>
                        <LineChart
                            width={800}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </div>

                <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed]'>
                        <h2>Revenue Resources</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div>
                        <PieComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main