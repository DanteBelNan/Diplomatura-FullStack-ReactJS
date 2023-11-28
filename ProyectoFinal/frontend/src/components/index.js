import Card from "./articulo/Card";

const Index = (props) => {
    return (
        <div class="container mt-5">
            <div class="row">
                <Card></Card>
            </div>
            <form action="/login/deleteUser" method="post">
                <input type="hidden" value="{{idUsuario}}" name="id"/>
                <button type="submit" class="btn btn-danger">Remover cuenta</button>
            </form>
        </div>


    );
}

export default Index;