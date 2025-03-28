import "./servcos.css";

export const Cardport = ({ imgpot, tport, descport }) => {
    return (
        <div className="cardserv">
            <img src={imgpot} />
            <h1>{tport}</h1>
            <p>{descport}</p>
        </div>
    )
}