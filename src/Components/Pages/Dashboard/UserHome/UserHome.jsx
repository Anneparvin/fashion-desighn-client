import { Helmet } from "react-helmet";


const UserHome = () => {
    return (
        <div className="text-center mt-4">
            <div>
            <Helmet>
                <title>Fashion Design | UserHome</title>
            </Helmet>
            </div>
            <h2 className="text-5xl font-bold underline">Regular user home</h2>
        </div>
    );
};

export default UserHome;