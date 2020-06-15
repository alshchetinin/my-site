import React from "react"
import Image from "../components/image"

class MainBlock extends React.Component {
   render() {
      return (
         <div className="main">
            <div className="main__img"> <Image></Image></div>
            <div className="main__text">
               <h1>Веб-дизайнер, разработчик</h1>
               <p>Создаю класные и эфективные сайты. Работаю над своими проектам и в <span>The Architect</span><br></br>Живу в Сочи 🌴 </p>
            </div>

         </div>
      )

   }
}
export default MainBlock