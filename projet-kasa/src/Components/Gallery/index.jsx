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
            <div className="cards">Card 1</div>
            <div className="cards">Card 2</div>
            <div className="cards">Card 3</div>
            <div className="cards">Card 4</div>
            <div className="cards">Card 5</div>
            <div className="cards">Card 6</div>
        </div>
      </section>
    );
  };
  
  export default Gallery;