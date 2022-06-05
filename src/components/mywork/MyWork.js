import React, {useState} from 'react';
import Isotope from '../isotope/Isotope'

const cardsDefault = [
    {
      id: "1",
      filter: ["People"]
    },
    {
      id: "2",
      filter: ["People"]
    },
    {
      id: "3",
      filter: ["Nature"]
    },
    {
      id: "4",
      filter: ["Nature"]
    },
    {
      id: "5",
      filter: ["Animals"]
    },
    {
      id: "6",
      filter: ["Animals"]
    }
  ];
  
  const filtersDefault = [
    { label: "People", isChecked: false },
    { label: "Nature", isChecked: false },
    { label: "Animals", isChecked: false },
  ];

function MyWork() {
    const [filters, updateFilters] = useState(filtersDefault);

    const onFilter = event => {
        const {
          target: { value, checked }
        } = event;
    
        updateFilters(state =>
          state.map(f => {
            if (f.label === value) {
              return {
                ...f,
                isChecked: checked
              };
            }
    
            return f;
          })
        );
      };
      
    return (
        <section className="section my-work" data-section="section3">
            <div className="container">
                <div className="section-heading">
                    <h2>My Work</h2>
                    <div className="line-dec"></div>
                    <span>
                        Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
                        amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
                        mauris.
                    </span>
                </div>
               
                <div className="row">
                    <div className="isotope-wrapper">
                    <Isotope/>
                        {/* <form className="isotope-toolbar">
                            <label>
                                <input
                                    type="radio"
                                    data-type="*"
                                    name="isotope-filter"
                                />
                                <span>all</span>
                            </label>
                            {filters.map(f => (
                                <label key={`${f.label}_key`}>
                                    <input
                                        type="radio"
                                        data-type={f.label}
                                        name="isotope-filter"
                                    />
                                    <span>{f.label}</span>
                                </label>
                            ))}
                        </form> */}
                        <div className="isotope-box">
                            {cardsDefault.map(card => (
                                <div key={card.id} className="isotope-item" data-type={card.filter}>
                                    <figure className="snip1321">
                                    <img
                                        src={require(`../../assets/images/portfolio-0${card.id}.jpg`)}
                                        alt={`sq-sample${card.id}`}
                                    />
                                    <figcaption>
                                        <a
                                            href={require(`../../assets/images/portfolio-0${card.id}.jpg`)}
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        >
                                            <i className="fa fa-search"></i>
                                        </a>
                                        <h4>First Title</h4>
                                        <span>free to use our template</span>
                                    </figcaption>
                                    </figure>
                                </div>
                            ))}
                            {/* <div className="isotope-item" data-type="nature">
                                <figure className="snip1321">
                                    <img
                                        src="assets/images/portfolio-01.jpg"
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href="assets/images/portfolio-01.jpg"
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i className="fa fa-search"></i
                                        ></a>
                                        <h4>First Title</h4>
                                        <span>free to use our template</span>
                                    </figcaption>
                                </figure>
                            </div> */}
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyWork;