import React, { createContext, useContext, useState } from 'react';

const FileContext = createContext();

export const useFile = () => useContext(FileContext);

export const FileProvider = ({ children }) =>
{
    const [openedFiles, setOpenedFiles] = useState([]);
    const [activeFile, setActiveFile] = useState(null);

    const openFile = (fileName) =>
    {
        if (!openedFiles.includes(fileName))
        {
            setOpenedFiles([...openedFiles, fileName]);
        }
        setActiveFile(fileName);
    };

    const closeFile = (fileName) =>
    {
        const newOpenedFiles = openedFiles.filter(file => file !== fileName);
        setOpenedFiles(newOpenedFiles);

        if (activeFile === fileName)
        {
            setActiveFile(newOpenedFiles[newOpenedFiles.length - 1] || null);
        }
    };

    return (
        <FileContext.Provider value={{ openedFiles, activeFile, openFile, closeFile }}>
            {children}
        </FileContext.Provider>
    );
};
