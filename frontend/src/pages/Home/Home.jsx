// function Home() {
//     return (
//         <h1>Home Page</h1>
//     );
// }

// export default Home;

import { useEffect } from "react";
import { checkHealth } from "../../services/predictionService";

function Home() {
    useEffect(() => {
        const testAPI = async () => {
            try {
                const response = await checkHealth();
                console.log("Health Check:", response);
            } catch (error) {
                console.error("Health Check Failed:", error);
            }
        };

        testAPI();
    }, []);

    return <h1>Home Page</h1>;
}

export default Home;