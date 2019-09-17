import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = props => {
    const {
        values: { search },
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        setFieldTouched
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Input
                    id="search"
                    name="search"
                    type="text"
                    size="massive"
                    placeholder="Nunca dejes de buscar ..."
                    value={term}
                    onChange={change.bind(null, "url")}
                    action={{
                        placeholder: '',
                        color: 'teal',
                        content: 'Search',
                        onClick: () => {
                            
                        }
                    }}
                />
                <p>{ term }</p>
            </form>
        </React.Fragment>
    );
}

export default Search;