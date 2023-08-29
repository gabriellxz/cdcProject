const jogadores = [
    {
        id: 1,
        nome: "Arthur",
        numero: 14,
        posicao: "Ala",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 2,
        nome: "Iarley",
        numero: 12,
        posicao: "Ala",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 3,
        nome: "J.Ruan",
        numero: 999,
        posicao: "Ala",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 4,
        nome: "Kadu",
        numero: 29,
        posicao: "Ala",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 5,
        nome: "P.Vinícius",
        numero: 10,
        posicao: "Ala",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 6,
        nome: "P.Victor",
        numero: 28,
        posicao: "Ala",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 7,
        nome: "Araújo",
        numero: 7,
        posicao: "Fixo",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 8,
        nome: "Josino",
        numero: 15,
        posicao: "Fixo",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 9,
        nome: "Welisson",
        numero: 16,
        posicao: "Fixo",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 10,
        nome: "Gabriel",
        numero: 30,
        posicao: "Goleiro",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 11,
        nome: "Kayo",
        numero: 11,
        posicao: "Pivô",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
        id: 12,
        nome: "Neto",
        numero: 9,
        posicao: "Pivô",
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
]

export function getJogadores() {
    return jogadores;
}

export function jogadorDados(numero: number) {
    return jogadores.find((j) => j.numero === numero)
}