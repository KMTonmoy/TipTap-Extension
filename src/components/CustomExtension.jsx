import { Node } from "@tiptap/core";

const CustomExtension = Node.create({
    name: "custom",
    group: "block",
    content: "inline*",
    parseHTML() {
        return [
            {
                tag: "custom-element",
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ["custom-element", HTMLAttributes, 0];
    },
    addNodeView() {
        return ({ HTMLAttributes }) => {
            const dom = document.createElement("div");
            dom.style.border = "2px dashed #9b59b6";
            dom.style.padding = "10px";
            dom.innerText = "Custom Node";
            return dom;
        };
    },
});

export default CustomExtension;
