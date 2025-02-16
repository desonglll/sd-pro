import Display, {DisplayDataProps} from "../../components/common/Display.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {BackendEndpoint} from "../../api/backend-endpoint.ts";

function EnvironmentPage() {
    const [env, setEnv] = useState<DisplayDataProps>({title: "", content: "", id: 0, images: []});
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        axios
            .get(BackendEndpoint.environment)
            .then((response) => {
                if (response.status === 200 && response.data.length > 0) {
                    console.log(response.data);
                    setEnv(response.data[0]); // 取第一条数据
                }
            })
            .catch((error) => console.error("Error fetching About Us data:", error))
            .finally(() => setLoading(false));
    }, []);

    return (!loading &&
        <Display data={env}/>
    )
}

export default EnvironmentPage;