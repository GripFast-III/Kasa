/*import React from 'react';
import { getData } from './../../Utils/get';
import Card from './../Card';

const housing = await getData('/data.json')

const Gallery = ({ page }) => {
    return (
        <ul className={`gallery ${page}__gallery`}>
            {housing.map((item, index) => {
                return <Card key={item.id} housing={item} page={page} />
            })}
        </ul>
    );
};

export default Gallery;
*/

import React from 'react';
//import Card from './Card/index'
//import { getData } from './../../Utils/get';

//const housing = await getData('./../../../public/logements.json')


const Gallery = () => {
    return (
      <section className="gallery">
        <div className='cardList'>
            <div className="cards">
                <div className="cardTitle">
                    Titre de la <br/> location
                </div>
            </div>
            <div className="cards">
                <div className="cardTitle">
                    Titre de la <br/> location
                </div>
            </div>
            <div className="cards">
                <div className="cardTitle">
                    Titre de la <br/> location
                </div>
            </div>
            <div className="cards">
                <div className="cardTitle">
                    Titre de la <br/> location
                </div>
            </div>
            <div className="cards">
                <div className="cardTitle">
                    Titre de la <br/> location
                </div>
            </div>
            <div className="cards">
                <div className="cardTitle">
                    Titre de la <br/> location
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;