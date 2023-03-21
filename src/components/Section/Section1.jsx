import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { AiFillStar, HiOutlineShoppingBag } from '../../assets/icons/index'


const Section1 = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get('https://63e8ca9b5f3e35d898f59067.mockapi.io/shopping');
        setData(data);
    };
    useEffect(() => {
        getData();
    }, []);

    function randomNumbers(getNumber) {
        return Math.floor(Math.random() * getNumber)
    }

    function procent(a) {
        return Math.floor(a / 12)
    }

    function prodecuSell(a) {
        return Math.floor(a / 1.5)
    }

    return (
        <section>
            <div className='w-[1200px] mx-auto mt-10 grid grid-cols-5'>
                {data.map(item => {
                    return (
                        <div key={item.id} className='card w-[216px] rounded-lg mb-5 hover:shadow-xl'>
                            <div className='rounded-lg relative overflow-hidden '>
                                <img className='h-[316px] w-[216px]  ' src={item.image} alt="" />
                                <p className='topMinus bg-violet-900 inline-block text-white px-1 font-bold absolute'>Акция</p>
                            </div>
                            <div className='rounded-lg bg p-1'>
                                <h4 className='my-1'>{item.name}</h4>
                                <p className='flex items-center gap-3 text-[14px]'>
                                    <p className='flex items-center gap-1'>
                                        <AiFillStar fill='yellow' />
                                        {randomNumbers(5)}
                                    </p>
                                    <p className='flex gap-1 '>
                                        ({randomNumbers(100)}
                                        {randomNumbers(100) < 10 ? <p>оценки</p> : <p>оценок</p>})
                                    </p>
                                </p>
                                <p className='bg-yellow-300 rounded-[4px] text-[11px] inline-block px-1'>{procent(item.price)}000 сум/мес</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='mt-3 mb-0 line-through text-[12px]'>{item.price}0 сум</p>
                                        <p className='text-[18px]'>{prodecuSell(item.price)} 000 сум</p>
                                    </div>
                                    <div><HiOutlineShoppingBag className='cursor-pointer' size={24} /></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Section1