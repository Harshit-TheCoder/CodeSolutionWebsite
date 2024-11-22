import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ filePath }) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(filePath)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [filePath]);

    return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
