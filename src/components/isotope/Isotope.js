import React, {useState} from 'react';


const filtersDefault = [
  { label: "People" },
  { label: "Nature" },
  { label: "Animals" },
];


const IsotopeReact = () => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')
  
  
    // initialize an Isotope object with configs
    React.useEffect(() => {
      isotope.current = new window.Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
  
    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
  
    const handleFilterKeyChange = (e, key) => {

      setFilterKey(key)
      console.log(e.currentTarget.checked)
      
      if(e.currentTarget.checked)
      {
        console.log("checked")
        e.currentTarget.checked = false;
      }
    }
  
    return (
      <div>
       

          <form className="isotope-toolbar">
            <label>
              <input type="radio"  onClick={((e) => handleFilterKeyChange(e, '*'))} />
              <span>All</span>
            </label>
              {
                filtersDefault.map(f => (
                  <label>
                    <input key={`${f.label}_key`} type="radio" onClick={((e) => handleFilterKeyChange(e, f.label))} />
                    <span>{f.label}</span>
                  </label>
                ))
              }
            

          </form>

        

        <hr />
        <ul className="filter-container">
          <div className="filter-item People">
            <span>Azman</span>
          </div>
          <div className="filter-item Nature">
            <span>Hutan</span>
          </div>
          <div className="filter-item Animals">
            <span>Gajah</span>
          </div>
          <div className="filter-item Nature People">
            <span>Badak Air</span>
          </div>
        </ul>
      </div>
    )
  }

  export default IsotopeReact
  