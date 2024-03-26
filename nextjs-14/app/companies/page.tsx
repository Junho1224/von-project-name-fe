"use client";


// 타입스크립트 문법
interface ICompany{ 
    company: string,
    contant: string,
    country: string
}


const Company = (props: ICompany) => {
    return (
        <tr>
            <td>{props.company}</td>
            <td>{props.contant}</td>
            <td>{props.country}</td>
        </tr>
    );
};


export default function Companies() {

    const companies = [
        { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
        { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
        { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
        { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
        { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
        { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
    ];
    const companymap = companies.map((v,i) => (<Company key={i} company={v.company} contant={v.contact} country={v.country} />))
    
    return (
        <>
            <table>
                <thead>
                    
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {companymap}
                </tbody>
            </table>
            <h2>게시판</h2>
        </>

    );
}