
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import ManageAllClass from './ManageAllClass';
import useClass from '../../../../hooks/UseClass';



const ManageClass = () => {
    const [classes] = useClass();
    
   
    return (
        <div className="w-full">
            <div>
            <Helmet>
                <title>Fashion Design | ManageClass</title>
            </Helmet>
            </div>
            <SectionTitle heading="Manage All Class" subHeading="Hurry up"></SectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
            {
                classes.map((item) =><ManageAllClass
                key={item._id}
                item = {item}
                ></ManageAllClass>
                )
            }
            </div>
           
        </div>
    );
};


export default ManageClass;