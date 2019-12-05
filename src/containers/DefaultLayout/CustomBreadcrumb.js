import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const CustomBreadcrumb = ({ appRoutes, pathName, menuText}) => {

    const [path, setPath] = useState()
    const [name, setName] = useState()

    useEffect(()=> {
        let n = pathName.split('/');
        setPath(n[1])
        setName(n[2])
    }, [pathName])

    return (
        <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                    <li className="breadcrumb-item" style={{textTransform: 'capitalize'}}><Link to={`/${path}/${name}`}>{path}</Link></li>
                    <li className="breadcrumb-item active">{name}</li>
                    <li className="breadcrumb-menu">
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            {menuText}
                  </div>
                </li>
              </ol>
            </nav>
        </div>
    )
}

export default CustomBreadcrumb
