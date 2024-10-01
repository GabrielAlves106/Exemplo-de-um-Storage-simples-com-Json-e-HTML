function dados(){ //cria função dados

    const ds = [ //Constante ds onde grava os dados

        {id: "1", login: "ringo", senha: "1234"},//0
        {id: "2", login: "paul", senha: "12345"},//1
        {id: "3", login: "john", senha: "123456"}//2
    ]

    const json = JSON.stringify(ds)//Transforma a constante ds em formato Json

    localStorage.setItem("banco")//

}

function remover(){ 

    localStorage.removeItem("banco")

}