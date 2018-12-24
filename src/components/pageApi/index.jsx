import React from 'react';

class PageAPI extends React.Component {
    render(){
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Method</td>
                        <td className="success">URL</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>GET</td>
                        <td className="success">/users/getUsers</td>
                        <td>Users list</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>POST</td>
                        <td className="success">/users/addUser</td>
                        <td>Create new User</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>DELETED</td>
                        <td className="success">/users/:idUser</td>
                        <td>Delete User for ID</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>POST</td>
                        <td className="success">/users/signIn</td>
                        <td>SignIn User</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default PageAPI;