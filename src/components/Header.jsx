import React from 'react';
import { AiOutlineHeart, BiShoppingBag, BsFillGeoAltFill, BsFillPersonFill, GrCatalog, GrSearch } from '../assets/icons/index'
import { Logo } from '../assets/index'

const Header = () => {

    const categories = [
        { title: 'Электроника' },
        { title: 'Бытовая техника' },
        { title: 'Одежда' },
        { title: 'Обувь' },
        { title: 'Аксессуары' },
        { title: 'Красота' },
        { title: 'Здоровье' },
        { title: 'Товары для дома' },
        { title: 'Строительство и ремонт' },
        { title: 'Детские товары' },
    ]

    return (
        <header>
            <div className="w-[1200px] mx-auto py-4">
                <ul className="flex justify-between items-center mb-5">
                    <li>
                        <ul className='flex items-center'>
                            <li className='mr-4 flex items-center'>
                                <BsFillGeoAltFill className='mr-2' /><p className="text-[14px]">Город: <span className="underline">Ташкент</span></p>
                            </li>
                            <li className='font-medium'>Пункты выдачи</li>
                        </ul>

                    </li>
                    <li className='text-gray-600'>Доставим ваш заказ бесплатно — всего за 1 день!</li>
                    <li>
                        <ul className='flex gap-2'>
                            <li><a className="text-[14px] font-medium text-gray-500 hover:text-black" href="">Продовайте на Uzum</a></li>
                            <li><a className="text-[14px] font-medium text-gray-500 hover:text-black" href="">Вопрос - ответ</a></li>
                            <li><a className="text-[14px] font-medium text-gray-500 hover:text-black" href="">Мои заказы</a></li>
                            <li><select className='outline-none'>
                                <option value="rus">Русский</option>
                                <option value="uzb">O'zbekcha</option>
                            </select>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className='flex justify-between items-center'>
                    <li><img src={Logo} alt="" /></li>
                    <li className='flex items-center gap-4'>
                        <ul className='flex items-center gap-2 rounded-lg px-4 py-2 bg-violet-200'>
                            <li ><GrCatalog /></li>
                            <li className='text-violet-800 font-medium'>Каталог</li>
                        </ul>
                        <ul>
                            <li className='border flex items-center rounded-sm '><input className='py-2 outline-none pl-4 w-[400px]' type="text" placeholder='Искать товары и котегории' /> <GrSearch className='mr-4' /> </li>
                        </ul>
                    </li>
                    <li>
                        <ul className='flex gap-5 '>
                            <li className='flex items-center ml-2 gap-2'><BsFillPersonFill size={25} /> <a href="">Войти</a></li>
                            <li className='flex items-center ml-2 gap-2'><AiOutlineHeart size={25} /> <a href="">Избранное</a></li>
                            <li className='flex items-center ml-2 gap-2'><BiShoppingBag size={25} /><a href="">Корзина</a></li>
                        </ul>
                    </li>
                </ul>
                <nav>
                    <ul className='flex justify-between mt-5'>
                        {categories.map((item, i) => <li key={i} className="text-gray-500 hover:text-black"><a href="">{item.title}</a></li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;