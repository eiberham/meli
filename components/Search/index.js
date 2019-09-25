import React from "react";
import './styles.scss';
import { Formik } from 'formik';
import SearchForm from "../Forms/SearchForm";
import { withRouter } from 'next/router';

const Search = props => {
    const { router } = props;
    return (
        <div className="search">
            <Formik
                render={props => <SearchForm {...props} />}
                initialValues={{ search: '' }}
                onSubmit={ ({search}, actions) => {
                    try {
                        actions.resetForm();
                        router.push(`/items?search=${search}`);
                    }catch(error){
                        console.error(error);
                    }

                }}
            />
        </div>
    )
};

export default withRouter(Search);