const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

alumns.forEach(alumn => {
    const approvedTrimesters = [alumn.T1, alumn.T2, alumn.T3].filter(trimestre => trimestre === true).length;
    alumn.isApproved = approvedTrimesters >= 2;
});

console.log(alumns);
