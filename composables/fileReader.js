import { ref, readonly } from 'vue';

const readResult = ref("yahoo");

export default () => {
    const FileRead = (filePath) =>{
        let readResult = "";
        fetch("/components/LayoutPattern1.vue",{
            "Content-Type": "plain/text",
        }).then(response => response.text())
        .then(data =>{
            readResult = data;
            console.log(data);
        });
        return readResult;
    };
    return {readResult: readonly(readResult), FileRead};
}