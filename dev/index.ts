import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { myLanguage, parser } from "../dist/";
import { printTree } from "./print-lezer-tree";

const doc = `(1 + 1) * 2`;

new EditorView({
  state: EditorState.create({
    doc,
    extensions: [basicSetup, myLanguage(), EditorView.lineWrapping],
  }),
  parent: document.querySelector("#editor")!,
});

// document.querySelector('#syntaxTree')!.innerHTML = printTree(parser.parse(doc), doc)

console.log(printTree(parser.parse(doc), doc));
