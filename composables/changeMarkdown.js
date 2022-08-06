import { ref, readonly } from 'vue';
import marked from "marked";

export default () => {
    const ChgToMarkdown = (textData) =>{
        return marked(textData);
        // return textData;
    };

    return {ChgToMarkdown};
}