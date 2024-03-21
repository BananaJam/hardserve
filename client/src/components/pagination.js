import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export default function Pagination({children, itemsPerPage}) {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(children.length / itemsPerPage);
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-4">
                {children.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
            </div>
            <div className="flex gap-4 mt-5">
                <button className="px-2 text-white rounded-md bg-slate-900 aspect-square" disabled={currentPage === 0} onClick={() => {setCurrentPage(currentPage-1)}}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <p>{currentPage + 1} of {pages}</p>
                <button className="px-2 text-white rounded-md bg-slate-900 aspect-square" disabled={currentPage === (pages - 1)} onClick={() => {setCurrentPage(currentPage+1)}}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}