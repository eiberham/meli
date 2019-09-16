import React, { useState, useRef } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from "semantic-ui-react";

const Search = () => {
    const [term, setTerm] = useState('');
    return (
        <React.Fragment>
            <Input
                id="search"
                name="search"
                type="text"
                size="massive"
                placeholder="Nunca dejes de buscar ..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                action={{
                    placeholder: '',
                    color: 'teal',
                    content: 'Search',
                    onClick: () => {
                        
                    }
                }}
            />
            <p>{ term }</p>
        </React.Fragment>
    )
};

export default Search;