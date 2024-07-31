import React from "react";
import { NavLink } from "react-router-dom";

export default function Category(props) {
    const { slug, name, url } = props.value;
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 mt-2 mb-2 text-center">
            <div className="card">
                <div className="card-body text-white text-wrap p-0">
                    <NavLink to={`/products/${slug}`} className="btn text-truncate w-100 py-lg-3 bg-secondary">{name}</NavLink>
                </div>
            </div>
        </div>
    );
}
