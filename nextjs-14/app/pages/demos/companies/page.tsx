"use client";

import companiesRows from "@/app/organisms/rows/companies-rows";

interface ICompany{ 
    company: string,
    contact: string,
    country: string
}


const Company = (props: ICompany) => {
    return (
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
};


export default function Companies() {

    const companymap = companiesRows().map((v,i) => (<Company key={i} company={v.company} contact={v.contact} country={v.country} />))
    
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
            
        </>

    );
}