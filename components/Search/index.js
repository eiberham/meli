import React, { useState, useRef } from "react";
import { Formik } from 'formik';
import SearchForm from "../Forms/SearchForm";
import Router from 'next/router';
import { withRouter } from 'next/router';

const Search = props => {
    // Save in context the search value
    const { router } = props;
    return (
        <React.Fragment>
            <Formik
                render={props => <SearchForm {...props} />}
                initialValues={{ search: '' }}
                onSubmit={ ({search}, actions) => {
                    try {
                        // Hacer la request con axios o fetch
                        router.push(`/items?search=${search}`);
                    }catch(error){
                        console.error(error);
                    }

                }}
            />
        </React.Fragment>
    )
};

export default withRouter(Search);