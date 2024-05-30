import PrimaryButton from "@components/Button"
import AppStatus from "../Components/AppStatus"
import FeaturesSwiper from "../Components/FeaturesSwiper"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"


const AddRole = () => {
    const { id } = useParams();
  return (
    <>
    <div className="mt-14">
    <AppStatus add={true} />
    <FeaturesSwiper/>
    <div className="mt-16 flex items-center justify-center gap-x-6 ">
                <Link to={"/private/applications-management/edit/"+id+"/roles"}>
                    <button type="button" className="text-sm font-semibold leading-6 text-[--textPrimary]">
                        Cancel
                    </button>
                </Link>
                <Link to={"/private/applications-management/edit/"+id+"/roles"}  >
                    <PrimaryButton text={"Save"} onClick={() => toast.success("Role Created Successfully.")} />
                </Link>
            </div>

    </div>
    
    </>
  )
}

export default AddRole