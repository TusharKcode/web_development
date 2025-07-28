import { useEffect} from "react";

function Example(){
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Tick');
        }, 1000);

        return () => {
        clearInterval(timer);
        console.log('Cleanup on amount.')
        };
    }, []);
}

export default Example;