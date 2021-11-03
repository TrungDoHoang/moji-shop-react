import React from 'react'
import HeaderCard from '../../components/HeaderCard'

function Dashboard() {
    window.scrollTo(0, 0)
    document.title = 'Dashboard'

    return (
        <>
            <HeaderCard />
            <div className="col-div-8">
                <div className="box-8">
                    <div className="content-box">
                        <p>Top Selling Projects <span>Sell All</span></p>
                        <br />
                        <table>
                            <tbody><tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                            </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                </tr>
                                <tr>
                                    <td>Centro comercial Moctezuma</td>
                                    <td>Francisco Chang</td>
                                    <td>Mexico</td>
                                </tr>
                                <tr>
                                    <td>Ernst Handel</td>
                                    <td>Roland Mendel</td>
                                    <td>Austria</td>
                                </tr>
                                <tr>
                                    <td>Island Trading</td>
                                    <td>Helen Bennett</td>
                                    <td>UK</td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
