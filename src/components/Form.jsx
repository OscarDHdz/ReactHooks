import React, {useState} from 'react';

const Form = ({submitSearch}) => {
    /**
     * search => state
     * saveSearch => setState
     */
    const [search, setSearch] = useState({
        city: '',
        country: ''
    });

    
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const searchWeather = e => {
        e.preventDefault();
        submitSearch(search);
    }


    return ( 
        <form
            onSubmit={searchWeather}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">City:</label>
            </div>

            <div className="input-field col s12">
                <select 
                onChange={handleChange}
                name="country">
                    <option value="">Select a Country...</option>
                    <option value="US">Unites States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Find Weather"
                />
                <label htmlFor="city">City:</label>
            </div>
        </form>
    );
}
 
export default Form;