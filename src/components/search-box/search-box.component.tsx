import './search-box.styles.css';
import { ChangeEvent } from 'react';

// //overloading while object oriented programming
// interface ISeachBoxProps {
//     className?: string;
//     placeholder?: string;
// }

// interface ISeachBoxProps {
//     onChangeHandler: (a: string) => void;
// }


// while functional programming
type SearchBoxProps ={
    className?: string;
    placeholder?: string;
    onChangeHandler:(event: ChangeEvent<HTMLInputElement>) => void;
}
 


const SearchBox = ({ className,placeholder, onChangeHandler }: SearchBoxProps) => (
                <input
                    className={className}
                    type="search"
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
        );
export default SearchBox;