import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faCheck } from "@fortawesome/free-solid-svg-icons";

import "../pages/ingredients.css";


export default function MultiSelect({ options, selected, setSelected, prefix = "", placeholder, className }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(item => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    }

    const placeholderFunc = () => {
        if (selected.length === 0) {
            return (<p>{`${placeholder}...`}</p>);
        } else {
            return selected.map((item, index) => (
                <p className=" bg-gray-300 mx-1 px-1 rounded" key={index}>{`${item}`}</p>
            ));
        }
    }

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null) {
                if (!dropdownRef.current.contains(e.target) && !triggerRef.current.contains(e.target) && isOpen){
                    setIsOpen(!isOpen);
                }
            }
        };

        if (isOpen) {
            window.addEventListener("click", pageClickEvent);
        }

        return () => {
            window.removeEventListener("click", pageClickEvent);
        }
    });

    return (
        <div ref={triggerRef} className={`bg-transparent p-1 px-2 w-full flex flex-col items-center border-1-5 ${className}`}>
            <div className="w-full flex text-nowrap cursor-pointer" onClick={toggle}>
                <div className="flex overflow-clip max-w-48">{placeholderFunc()}</div>
                <FontAwesomeIcon className="ml-auto pt-1" icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && (
                <div ref={dropdownRef} className="absolute bg-white p-1 flex flex-col gap-1 -ml-1 mt-8 max-w-52">
                    {options.map((option, index) => (
                        <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer" key={index} onClick={() => handleSelect(option)}>
                            <FontAwesomeIcon className={"ml-auto pt-1 mr-3 " + (selected.includes(option) ? "visible" : "invisible")} icon={faCheck} />
                            {prefix + option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}