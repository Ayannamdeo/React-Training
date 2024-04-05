import { useState } from "react";

export function Clipboard(){
    
    return(
        <div>
            <h1>Question-17: useClipboard custom Hook</h1>
            {/* <input type="text" name="clipboard" onClick={}/> */}
        </div>
    );
}

function useClipboard(){
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text) => {

        try {
            let texttemp = document.getElementsByName("clipboard");
            texttemp.select();
            document.execCommand('copy');
            setIsCopied(true);
        } catch (err) {
            setIsCopied(false);
            console.log("failed to copy text using document.execCommand: ", err);
            try{
                await navigator.clipboard.writeText(text);
            setIsCopied(true);            }
            catch(err){
                setIsCopied(false);
                console.log("failed to copy using navigator clipboard API: ", err);
            }
        }
    };

}