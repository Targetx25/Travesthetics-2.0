import React from 'react'
import HeroSection from '../components/heroSection'
import Section2 from '../components/extraSection'

function Home() {
    const data = [
        {   
            id : "1",
            text1 : "If its A Date,",
            text2 : "We Will Do The Magic",
            clr : "#FD5169",
            url : "https://images.unsplash.com/photo-1707296814743-2e08aff032f2?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,"
        },
        {
            id : "2",
            text1 : "Going With Family..",
            text2 : "Make It Memorable!",
            clr : "#7DA2B5",
            url : "https://images.unsplash.com/photo-1533900634839-91e7a120a88a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            id : "3",
            text1: "Going Alone?",
            text2: "Make It A Thriller..",
            clr : "#1B2524",
            url : "https://images.unsplash.com/photo-1715439668047-c2be77f8319d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id : "4",
            text1: "Maximize Fun With Friends",
            clr : "#4A2A1F",
            text2: "Let Us Decide The Place...",
            url : "https://images.unsplash.com/photo-1624000725322-cc89d35e300d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    ]
  return (
    <>
        <HeroSection/>
        {data.map((card)=>(
            <Section2
            key = {card.id}
            clr = {card.clr}
            text1 = {card.text1}
            text2 = {card.text2}
            url = {card.url}
            />
            
        ))}
    </>
  )
}

export default Home
