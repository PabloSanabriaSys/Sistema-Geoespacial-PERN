import { useAuth } from "../contexts/Auth/AuthProvider"
import PruebaToast from "../components/PruebaToast"

export default function Setting() {
    const { user } = useAuth()

    return (
        <div className=" bg-fixed bg-cover  bg-center h-screen  py-20 ">
            {JSON.stringify(user,null,'\t')}
            <PruebaToast/>
        </div>
    )
}