import React, { useEffect, useState } from 'react'
import MultiChoices from './MultiChoices'
import SingleChoice from './SingleChoice'

function Ml() {

    const [type, setType] = useState(null)
    const [algoList, setAlgoList] = useState([])
    const [algo, setAlgo] =  useState([])
    const [datasetType, setDatasetType] = useState([])

    const [algos, setAlgos] = useState({'CF': ['RMF'], 'CRF': ['KNN', 'TFIDF'], 'HYB': ['TFIDF + PMF']})

    useEffect(()=>{
        setAlgoList(algos[type])
        setAlgo([])
    }, [type])

    const addToAlgo = (newAlgo) => {
        if(algo.includes(newAlgo)){
            const newAlgoList = []
            algo.forEach((value) => {if(value != newAlgo)newAlgoList.push(value);})
            setAlgo(newAlgoList)
        }
        else
            setAlgo([...algo, newAlgo])
    }

    const addToDataset = (newDataset) => {
        if(datasetType.includes(newDataset)){
            const newDatasetList = []
            datasetType.forEach((value) => {if(value != newDataset)newDatasetList.push(value);})
            setDatasetType(newDatasetList)
        }
        else
        setDatasetType([...datasetType, newDataset])
    }


    return (
        <div className='flex w-screen h-full'>

            <div className='flex flex-col gap-5 w-1/2 h-full px-10'>

                <h1 className='font-bold text-[26px] w-full text-center'>Machine Learning</h1>

                <SingleChoice title={'type Name'} value={type} setValue={setType} list={['CF', 'CRF', 'HYB']} className={'grid-cols-3'}/>

                { type && <MultiChoices title={'Algorithm'} list={algoList} setValue={addToAlgo} className={'grid-cols-3'}/>}
                
                { type && <MultiChoices title={'Dataset'} list={['Book-Crossing', 'Amazone-Book']} setValue={addToDataset} className={'grid-cols-3'}/>}

            </div>

            <div className='w-1/2 h-full'>

            </div>
            
        </div>
    )
}

export default Ml
