// Object company

function createCompany(compName, compFoundation, compIndustry) {
    const company = {
        cName: compName,
        founded: compFoundation,
        industry: compIndustry
    };
    return company;
}

const companyOne = createCompany('Amazon', 1994, 'E-commerce, Cloud');
const companyTwo = createCompany('Facebook', 2004, 'Social');
const companyThree = createCompany('Alphabet Inc.', 2015, 'Search, Cloud, Advertising');

const companies = [companyOne, companyTwo, companyThree];
companies.map(comp => comp.kind = 'Internet company');

const show = (companies) => {
    let s = ``;
    let dots = 0;
    for (const company of companies) {
        dots = 19 - (company.cName.length + 4);
        s += `${company.cName}` + '.'.repeat(dots) + `${company.founded}\n`;
    }
    return s;
};

console.log(show(companies));
