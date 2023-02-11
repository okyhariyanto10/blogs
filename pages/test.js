// export async function getStaticProps(context) {
//     const res = await fetch(`http://localhost:3000/api/product`)
//     const data = await res.json()

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: { data }, // will be passed to the page component as props
//     }
// }

export default function Test({ data }) {
    return (
        <>

        <div className="text-center p-10 text-7xl">
            <h1>TEST ON</h1>
            

            {/* <ul>
                {data.map((datas) => (
                    <li>
                        <h3>{datas.product}</h3>
                        <h3>{datas.price}</h3>
                        <p>{datas.id}</p>
                    </li>
                ))}
            </ul> */}
        </div>
       <div className="w-8/12 items-center p-4">
        <tr>
            <th>Id</th>
            <th>Product</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
        </tr>

        </div>
        </>

    )
}