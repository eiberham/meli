import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchForm = props => {
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
                    size="small"
                    placeholder="Nunca dejes de buscar ..."
                    value={search}
                    onChange={change.bind(null, "search")}
                    action={{
                        placeholder: '',
                        color: 'teal',
                        icon: 'search',
                        onClick: () => {
                            
                        }
                    }}
                />
            </form>
        </React.Fragment>
    );
}

export default SearchForm;