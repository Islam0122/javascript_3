import {Fire, Pizza, Sushi, Drinks, Snacks, Combo, Deserts, Sauces, Img, Img_1} from "../../assets/index.js";
import {useEffect, useState} from "react";

const url = 'https://676ce7e30e299dd2ddfdcd54.mockapi.io/api/v1/pizza'

const menu = [
    {
        icon: Fire,
        name: 'Акции',
    },
    {
        icon: Pizza,
        name: 'Пицца',
        id: 'pizza'
    },
    {
        icon: Sushi,
        name: 'Суши',
        id: 'sushi'
    },
    {
        icon: Drinks,
        name: 'Напитки',
        id: 'drinks'
    },
    {
        icon: Snacks,
        name: 'Закуски',
        id: 'snacks'
    },
    {
        icon: Combo,
        name: 'Комбо',
        id: 'combo'
    },
    {
        icon: Deserts,
        name: 'Десерты',
        id: 'deserts'
    },
    {
        icon: Sauces,
        name: 'Соусы',
        id: 'sauces'
    },
]
const sales =[
    {
        bgImage: Img,
        text: "3 средние пиццы от 999 рублей"
    },

    {
        bgImage: Img_1,
        text: "Кешбек 10% на самовывоз (доставка)"
    },

    {
        bgImage: Img,
        text: "3 средние пиццы от 999 рублей"
    },

    {
        bgImage: Img_1,
        text: "Кешбек 10% на самовывоз (доставка)"
    },
]

// useState, useEffect

const HomePage = () => {
    const [pizzaData, setPizzaData] = useState( [])

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
       setPizzaData(data);
        console.log(data)
        console.log(data[0].sushi)
    }
    useEffect(() => {
        fetchData();
    }, []);

    if(pizzaData.length === 0) {
        return <h1 className={"text-center text-[44px]"}> Loading...</h1>
    }

    return (
        <div className={"container mx-auto"}>
            <div className={"flex gap-[30px]"}>
                {menu.map( (m) => {
                    return (
                        <div
                            key={m.name}
                            className={"w-[135px] h-[104px] border rounded-[12px] flex items-center justify-center flex-col"}>
                            <img src={m.icon} alt="photo"/>
                            <p> {m.name} </p>
                        </div>

                    )
                })}
            </div>
            <div className={"flex"}>
                {sales.map((s, index) => {
                    return (
                        <div key={index}
                        style={{
                            backgroundImage: `url(${s.bgImage})`,
                            backgroundSize: "cover",
                            margin: "30px 15px",
                            display: "flex",
                            alignItems: "end",
                        }}
                        className={"w-[300px] h-[343px] p-[20px]"}>
                            <p className={"text-white text-[20px] font-[600] w-[220px]"}> {s.text}</p>

                        </div>
                    )
                })}
            </div>
            <section id={"pizza"}>
                <h2>Пицца</h2>
                <div className={"flex flex-wrap gap-[30px] "}>
                    {pizzaData[0].pizza.map( pizzaItem => {
                        return (
                            <div key={pizzaItem.name} className={"w-[300px]"}>
                                <div className={"flex items-center justify-center"}>

                                <img src={pizzaItem.image}/>
                                </div>
                                <h3 className={"text-[26px]"}>{pizzaItem.name}</h3>
                                <p>{pizzaItem.desc}</p>
                                <div className={ "flex justify-between"}>
                                    <button>Выбрать</button>
                                    <h6>от {pizzaItem.price}  ₽</h6>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>

            <section id={"sushi"}>
                <h2>Суши</h2>
                <div className={"flex "}>
                    {pizzaData[0].sushi.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}> {pizzaItem.name} </div>
                        )
                    })}
                </div>
            </section>

            <section id={"drinks"}>
                <h2>Напитки</h2>
                <div className={"flex "}>
                    {pizzaData[0].drinks.map(item => {
                        return (
                            <div key={item.name}>
                                <img src={item.image} alt=""/>
                                <h3>{item.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section id={"snacks"}>
                <h2>Закуски</h2>
                <div className={"flex "}>
                    {pizzaData[0].snacks.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}> {pizzaItem.name} </div>
                        )
                    })}
                </div>
            </section>
            <section id={"combo"}>
                <h2>Комбо</h2>
                <div className={"flex "}>
                    {pizzaData[0].combo.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}>
                                <img src={pizzaItem.image} alt=""/>
                                <h3>{pizzaItem.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section id={"desserts"}>
                <h2>Десерты</h2>
                <div className={"flex "}>
                    {pizzaData[0].desserts.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}>
                                <img src={pizzaItem.image} alt=""/>
                                <h3>{pizzaItem.name}</h3>

                            </div>
                        )
                    })}
                </div>
            </section>
            <section id={"sauces"}>
                <h2>Соусы</h2>
                <div className={"flex "}>
                    {pizzaData[0].sauces.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}>
                                <img src={pizzaItem.image} alt=""/>
                                <h3>{pizzaItem.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default HomePage;