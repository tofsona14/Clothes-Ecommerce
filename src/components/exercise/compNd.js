import Th from "./compTh"
const Nd = () => {
    const info = {
        first: {
            month: "August",
            year: 2020,
            day: 14,
            object: "Toilet Paper",
            price: 94.12
        },
        second: {
            month: "March",
            year: 2021,
            day: 12,
            object: "Car Insurance",
            price: 294.67
        }
    }
    return(
        <div className="test4">
            <div className="oo">
                <Th
                month = {info.first.month}
                year = {info.first.year}
                day = {info.first.day}
                object = {info.first.object}
                price = {info.first.price}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Th
                month = {info.second.month}
                year = {info.second.year}
                day = {info.second.day}
                object = {info.second.object}
                price = {info.second.price}
                />
            </div>
        </div>
    )
}
export default Nd;