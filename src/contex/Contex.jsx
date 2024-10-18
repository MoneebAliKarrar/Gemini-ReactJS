import { createContext, useState } from "react";
import run from "../config/gemini";

export const Contex = createContext()

const ContexProvider = (props) => {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('')
    const [previousPrompts, setPreviousPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')

    const onSent = async(prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }
    
    const contextValue = {
        previousPrompts, setPreviousPrompts,
        onSent,
        input, setInput,
        recentPrompt, setRecentPrompt,
        showResult, setShowResult,
        loading, setLoading,
        resultData, setResultData

    }
    return(
        <Contex.Provider value={contextValue}>
            {props.children}
        </Contex.Provider>
    )
}
export default ContexProvider