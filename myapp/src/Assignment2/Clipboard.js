import { useState } from "react";

export function Clipboard(){
    const [text, setText] = useState("");
    const [isCopied, copyToClipboard] = useClipboard();

    return(
        <div>
            <h1>Question-17: useClipboard custom Hook</h1>
            <input type="text" value={text} id="clipboard" onChange={e=>setText(e.target.value)}/>
            <button onClick={()=>copyToClipboard(text)}>{!isCopied ? 'Copy': 'Copied to ClipBoard'}</button>
        </div>
    );
}

function useClipboard(){
    const [isCopied, setIsCopied] = useState(false);
    
    const copyToClipboard = async (text) => {

        try {
            let texttemp = document.getElementById("clipboard");
            texttemp.select();
            document.execCommand('copy');
            setIsCopied(true);
            console.log("successfully copied using execCommand");
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
    return [isCopied, copyToClipboard];
}