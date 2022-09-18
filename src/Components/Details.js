const Details = (props) => {
    return(
        <div className="margin-left">
            
            <table>
                <tr className="chBac">
                    <td>PROPERTY</td>
                    <td>MOVE IN DATE</td>
                    <td>RENT</td>
                    <td>DEPOSIT</td>
                    <td>STATUS </td>
                </tr>
                <tr>
                <td>⛪ 771 Lost Round </td>
                    <td>25 February 2020</td>
                    <td>$3000</td>
                    <td>$9000</td>
                    <td>Awaiting Bank Processing &nbsp;&emsp; </td>
                    <td className={`${props.yl}`}>  </td>
                </tr>
                <tr>
                    <td>🍱 1491 Jagged Arbor</td>
                    <td>12 March 2020</td>
                    <td>$2300</td>
                    <td>$4600</td>
                    <td>Payment Processed&nbsp;&emsp; </td>
                    <td className={`${props.gr}`}>  </td>
                </tr>
            </table>
            <button>All Active Deposits</button>
        </div>
    )
}
export default Details;