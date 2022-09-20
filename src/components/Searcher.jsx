import {Input} from "antd";
import {useDispatch} from "react-redux";
import {setFilter} from "../slices/dataSlice.js";

const Searcher = () => {
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return <Input.Search
        placeholder="Search..."
        onChange={handleOnChange}
        style={{marginBottom: '10px'}} />
};

export default Searcher;
