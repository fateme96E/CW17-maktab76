import { useEffect, useMemo, useState } from "react";

const RectangleArea = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState()
    useEffect(() => {
        setHeight(2)
        setWidth(3)
    }, [])


    const p = useMemo(() => { return (width + height) * 2 }, [width, height]);
    const a = useMemo(() => { return (width * height) }, [width, height]);
    return (
        <>
            <span className=" badge bg-warning text-white m-4 p-3">Perimeter: {p}</span>
            <span className=" badge bg-info text-white m-4 p-3"> Area : {a}</span>
        </>);
}

export default RectangleArea;