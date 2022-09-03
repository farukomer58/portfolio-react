import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Modal() {



    let params = useQuery();
    console.log(params.get("id"))

    return <>
        {/* <!-- Modal --> */}
        <div className='modalContainer'>
            <div id="myModal" className="modal hide fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3 id="myModalLabel">Modal header</h3>
                </div>
                <div className="modal-body">
                    <div id="datetimepicker1" className="input-append date">
                        <input data-format="dd/MM/yyyy hh:mm:ss" type="text"></input>
                        <span className="add-on"><i data-time-icon="icon-time" data-date-icon="icon-calendar"></i></span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                </div>
            </div>
        </div>
    </>;
}

export default Modal;
