import React from "react";
import {MenyCard} from "../components/MenyCard";
import "./main-page.css";

interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = ({}: MainPageProps) => {
    return (
        <div>
            <div className="products-cart">
                <div className="products-list" style={{overflowY: "auto"}}>
                    {menyer.map((meny) => (
                            <MenyCard
                                key={meny.id}
                                title={meny.title}
                                allergier={meny.allergier}
                                img={meny.img}
                                price={meny.price}
                                content={meny.content}
                            />
                        )
                    )}
                </div>
                <div className="cart">
                    CART
                </div>
            </div>
        </div>
    )
}

const menyer = [
    {
        id: 1,
        cat: "s",
        title: "SHAWARMA I RULL",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/shawarmarull.jpg'
    },
    {
        id: 2,
        cat: "s",
        title: "SHAWARMA TALLARKEN",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/shawrma-arabi.jpeg'
    },
    {
        id: 3,
        cat: "s",
        title: "HUNGRY BIRDS ",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/hungry-birds.png'
    },
    {
        id: 4,
        cat: "c",
        title: "CRISPY CHICKEN RULL",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/cripsy-rull.png'
    },
    {
        id: 5,
        cat: "c",
        title: "CRISPY SNACK BOX",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/crispy-snack-box.jpeg'
    },
    {
        id: 6,
        cat: "c",
        title: "CRIPSY BOX",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/cripsy-box.jpg'
    },
    {
        id: 7,
        cat: "c",
        title: "CRIPSY BURGER",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/crispy-burger.jpg'
    },
    {
        id: 8,
        cat: "v",
        title: "FALAFEL RULL",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/falafel-rull.jpeg'
    }
]