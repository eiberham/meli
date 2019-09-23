import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from "@emotion/styled";

const Form = styled.form `
    width: 100%;
`;

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
            <Form onSubmit={handleSubmit}>
                <Input
                    fluid
                    id="search"
                    name="search"
                    type="text"
                    size="small"
                    placeholder="Nunca dejes de buscar ..."
                    value={search}
                    onChange={change.bind(null, "search")}
                    action={{
                        placeholder: '',
                        icon: 'search',
                        onClick: () => {
                            
                        }
                    }}
                />
            </Form>
        </React.Fragment>
    );
}

export default SearchForm;