import ShowProgress from "./components/ShowProgress";
import InfoForToday from "./components/InfoForToday";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import BottomPart1 from "./components/BottomPart1";


export const wiseWords ={

    Lasdora: "The difference between the impossible and the possible lies in a person’s determination. —Tommy Lasorda",
    Ziglar: "Put all excuses aside and remember this: You are capable. —Zig Ziglar",
    Bryant: "If you do not believe in yourself, no one will do it for you — Kobe Bryant",

}
export const motivationWords ={
    Lasdora: "The difference between the impossible and the possible lies in a person’s determination. —Tommy Lasorda",
    Ziglar: "Put all excuses aside and remember this: You are capable. —Zig Ziglar",
    Bryant: "If you do not believe in yourself, no one will do it for you — Kobe Bryant",
}



export const typesOfWorkout ={
    weight:"Lift",
    cardio:"cardio",
    mental:"mental",
}


export const steps = [
    {
        label: 'Tommy Lasorda',
        description: <ShowProgress/>,
    },
    {
        label: 'Zig Ziglar',
        description:
            <InfoForToday/>,
    },
    {
        label: 'Kobe Bryant',
        description: <QuoteOfTheDay/>,
    },
];
export const infos = [
    {
        label: 'Tommy Lasorda',
        description: <BottomPart1/>,
    },
    {
        label: 'Zig Ziglar',
        description:
            <InfoForToday/>,
    },
    {
        label: 'Kobe Bryant',
        description: <QuoteOfTheDay/>,
    },
];