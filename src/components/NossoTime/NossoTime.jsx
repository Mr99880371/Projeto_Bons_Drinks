import React from 'react'
import Membro3 from '../../img/Cristina-Ferrer.jpg'
import Membro1 from '../../img/Jose-Lacerda.jpg'
import Membro2 from '../../img/João-Vitor-de-Almeida.jpg'
import Membro4 from '../../img/Maria-Clara-Lima.jpg'
import './NossoTime.css'


export default function nossoTime() {
    return (
        <div className="timeContainer">
            <div className="timeTitulo">
                <h1>Nosso Time</h1>
            </div>
        <div className="informacoes">
            <div>
                <img className="foto" src={Membro1} alt="membro1" width="150px" height="200px" />
            </div>
            <div className="members">    
                <h1>Jose Lacerda</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </div>
            <div>
                <img className="foto" src={Membro2} alt="membro1" width="150px" height="200px" />
            </div>
            <div className="members">
                <h1>João Vitor de Almeida</h1>
                <p>Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo.</p>
            </div>
            <div>
                <img className="foto" src={Membro3} alt="membro1" width="150px" height="200px" />
            </div>
            <div className="members">
                <h1>Cristina Ferrer</h1>
                <p>Integer nec felis sodales, sagittis dolor non, congue libero. Morbi nec fringilla ipsum, ac finibus ligula. Praesent quis iaculis mi, a iaculis odio. Cras quis.</p>
            </div>
            <div>
                <img className="foto" src={Membro4} alt="membro1" width="150px" height="200px" />
            </div>
            <div className="members">
                <h1>Maria Clara Lima</h1>
                <p>Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo.</p>
            </div>
            </div>            

        </div>
    )
}
